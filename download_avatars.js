var request = require('request');
var fs = require('fs');

var args = process.argv.slice(2);
let repoOwner = args[0];
let repoName = args[1];

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://api.github.com/repos/jquery/jquery/contributors',
    headers: {
      'User-Agent': 'NicholasSmilovic'
    }
  }
  request.get(options, function(error, response, body) {
    if (error){
      console.log("there was a error!! \n", error);
    }
    var hold = JSON.parse(body);
    console.log(hold);
    for(var users of hold) {
      console.log(users.avatar_url);
    }
  })

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  console.log("body:", body);
});