var http = require("http");
const request = require("request");
const cheerio = require("cheerio");

const keyword = "laptop";
// let result = "";

let products = [];

const getProductTemplate = (
  title,
  page,
  thumbnail,
  thumbnail_desc,
  rating,
  no_of_reviews
) => {
  return {
    title,
    page,
    thumbnail,
    thumbnail_desc,
    rating,
    no_of_reviews
  };
};

request(`https://www.amazon.in/s?k=${keyword}`, (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const results = $("[class='.s-include-content-margin']");
    results.each((i, e) => {
      // const page = $(e).find(".a-link-normal");
      // console.log(page.text());
      // const img = $(e)
      //   .find(".s-image")
      //   .attr("src");
      console.log($(e));
    });
    // console.log(results);
    // console.log(html);
  }
});

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
