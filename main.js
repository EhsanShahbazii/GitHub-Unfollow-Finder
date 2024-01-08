const axios = require("axios");
const cheerio = require("cheerio");

const fs = require("fs");

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInput = (message) => {
  return new Promise((resolve, reject) => {
    readline.question(`${message}: `, (input) => {
      resolve(input);
    });
  });
};

const getFollowers = async (username) => {
  console.log("Data is extracting from github ...");
  try {
    finish_followers = false;
    p_index = 1;
    let followers_data = [];
    while (!finish_followers) {
      const response = await axios.get(
        `https://github.com/${username}?page=${p_index}&tab=followers`
      );

      const html = response.data;
      const $ = cheerio.load(html);

      let follower_p_data = [];
      if ($("span.Link--secondary").length == 0) {
        finish_followers = true;
      } else {
        $("span.Link--secondary").each((i, person) =>
          follower_p_data.push({
            name: $(person).prev().text(),
            username: $(person).text(),
            profileLink: `https://github.com/${$(person).text()}`,
          })
        );
      }
      p_index++;
      followers_data = await [...followers_data, ...follower_p_data];
    }

    return followers_data.length == 0 ? "user not found!" : followers_data;
  } catch (error) {
    throw error;
  }
};
