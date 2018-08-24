// dependencies
"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const http = require("https");
var unirest = require("unirest");
let errorResposne = {
  results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post("/getPedido", function(request, response) {
  //if(request.body.queryResult.parameters['top-rated']) {

  response.setHeader("Content-Type", "application/json");
  response.send(
    JSON.stringify({
      //source: "EchoService",
      source: "sirros.net",
      //fulfillmentText: "",
      fulfillment: {
        messages: [
          {
            type: "basic_card",
            title: "card title",
            subtitle: "card text",
            formattedText: "formattedText",
            image: {
              accessibilityText: "teste card",
              url:
                "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png"
            },
            buttons: [
              {
                title: "button text",
                openUrlAction: { url: "https://assistant.google.com/" }
              }
            ]
          }
        ]
      }
    })
  );

  //}
});

server.listen(port, function() {
  console.log("Server is up and running...");
});
