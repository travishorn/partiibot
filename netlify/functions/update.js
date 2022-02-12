const axios = require("axios").default;

exports.handler = async (event) => {
  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    chat_id: event.body.message.chat.id,
    text: "I got your message!",
  });
  return { statusCode: 200 };
};
