var request = require('request');
var fs = require('fs');
require('dotenv').config();

//intiates program
console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = process.env.DB_USER;
var GITHUB_TOKEN = process.env.API_KEY;


//gets repo contributors
function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'NicholasSmilovic'
    }
  }
  request.get(options, function(error, response, body) {
    if (error){
      console.log("there was a error!! \n", error);
    }
    hold = JSON.parse(body);
    // console.log(hold)
    if( hold.message === "Not Found"){
      console.log("bad repoName, or repoOwner")
    }
    //cycle through and download avatars
    if(hold.message === "Bad credentials"){
      console.log("bad credentials");
      throw error;
    }
    cb(error, hold);
    // for(var users of hold) {
    //     downloadImageByURL(users.avatar_url, "./avatar-pics/" + users.login)
    //     console.log(users.avatar_url);
    // }
  })
}


function downloadImageByURL(url, filePath) {
  // ...

  request.get(url)
    .on('error', function(err){
      console.log("")
      throw err;
    })
    .on('response', function(response){
      console.log("Response Status Code: ", response.statusCode);
    })
    .pipe(fs.createWriteStream(filePath))
    .on('error', function(err){
      console.log("target folder missing");
      throw error;
    })
}

var args = process.argv.slice(2);
if (args.length < 2) {
  console.log("termination: missing arguments")
} else {
    //get user inputs
    let repoOwner = args[0];
    let repoName = args[1];
    //give user inputs to function

    getRepoContributors(repoOwner, repoName, function(err, result) {
      console.log("Errors:", err);

      for(var users of hold) {
        downloadImageByURL(users.avatar_url, "./avatar-pics/" + users.login)
        console.log(users.avatar_url);
    }
      //  console.log(result)
    });
}

