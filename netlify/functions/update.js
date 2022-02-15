const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);

  if (botName === "partiibot" || botName === null) {
    await sendMessage(message.chat.id, "I got your message!");
  }

  return { statusCode: 200 };
};
