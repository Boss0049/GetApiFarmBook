const express = require("express");
const app = express();
const axios = require("axios");
const moment = require("moment");

const getData = async (req, res) => {
  try {
    for (let i = 0; i <= 5; i++) {
      const test = await axios.get("https://api.dev.farmbook.co/mbapi/test");
      console.log(test.data);

      console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }
  } catch (err) {
    console.log(err);
  }
};

app.use("/", getData);

app.listen(8000, () => {
  console.log("Server is Running");
});
