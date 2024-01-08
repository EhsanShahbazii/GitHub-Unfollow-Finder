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

