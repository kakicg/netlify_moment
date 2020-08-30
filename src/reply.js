const { default: Axios } = require("axios")

importaxiosfrom'axios'

exports.handler = async function(event,context,callback) {
    const webhookBody = JSON.parse(event.body)
    console.log(webhookBody)

    const data = {
        replyToken:webhookBody.events[0].replyToken,
        messages:[
            {
                type: 'text',
                text: 'Hello Netlify Bot'
            }
        ]
    }

    const res = await Axios.post('https://api.line.me/v2/bot/message/reply', data,
      {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.CHANNEL_TOKEN}`
          }
      })
      console.log(res)

      callback(null, {
          statusCode: 200,
          body: JSON.stringify(event)
      })
}