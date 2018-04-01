module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd Like Your Input</h3>
          <p>
            Please Answer The Following Question
          </p>
          <p>
            ${survey.body}
          </p>
          <div>
            <a href="http://localhost:8080">Yes</a>
          </div>
          <div>
            <a href="http://localhost:8080">No</a>
          </div>
        </div>
      </body>
    </html>
  `
}