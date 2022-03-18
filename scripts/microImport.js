"use strict";
const querystring = require("querystring");
const axios = require("axios");
let jsonData = require("./strapiOutput.json");

async function upload() {
  const articles = jsonData.map((category) => {
    category.articles.map((article) => {
      console.log(article.title);
      axios.post(
        "https://micro.blog/micropub",
        querystring.stringify({
          h: "entry",
          name: article.title,
          content: article.body,
          published: article.published_at,
          category: [category.Tag],
        }),
        {
          headers: {
            Authorization: "Bearer " + "AAE1253B99AD08C188AE",
            "Content-Type": "multipart/form-data",
          },
        }
      );
    });
  });
  await Promise.all(articles).catch((err) => console.log(err));
}

upload();
