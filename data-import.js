"use strict";
const fs = require("fs");

let rawData = require("./data.json");

const newData = rawData
  .filter((t) => t._type === "post")
  .map((post) => {
    return {
      body: post.body,
      slug: post.slug.current,
      title: post.title,
      publishedAt: post.publishedAt,
      categories: post.categories,
    };
  });
const data = JSON.stringify(newData);
fs.writeFileSync("cleaned-posts.json", data);
