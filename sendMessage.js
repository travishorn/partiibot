const axios = require("axios").default;

module.exports = async (chat_id, text) => {
  console.log(chat_id);
  await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    chat_id,
    text,
  });

  return true;
};
