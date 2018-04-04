const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks For Voting');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, body, subject, recipients } = req.body;

    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    // Send Email
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      // Send The Emails
      await mailer.send();
      // Save The Survey
      await survey.save();
      // Deduct one credit from the user
      req.user.credits -= 1;
      // Save the user with the new creit amount
      const user = await req.user.save();
      // Send the browser the user with the new credit amount
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = Path.createPath('/api/surveys/:surveyId/:choice');
    const event = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        const { surveyId, choice } = match;

        if (match) {
          return { email, url, ...match };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: { $elemMatch: { email: email, responded: false } }
          },
          { $inc: { [choice]: 1 }, $set: { 'recipients.$.responded': true } }
        ).exec();
      })
      .value();
    console.log(event);
    res.send({});
  });
};