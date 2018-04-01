const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  subject: {
    type: String
  },
  recipients: {
    type: [RecipientSchema]
  },
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSent: {
    type: Date
  },
  lastResponded: {
    type: Date
  }
});

mongoose.model('surveys', surveySchema);
