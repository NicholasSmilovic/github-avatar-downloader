var request = require('request');
var fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://api.github.com/repos/'+repoOwner+'/'+repoName+'/contributors',
    headers: {
      'User-Agent': 'NicholasSmilovic'
    }
  }
  request.get(options, function(error, response, body) {
    if (error){
      console.log("there was a error!! \n", error);
    }
    var hold = JSON.parse(body);
    // console.log(hold);
    //*************************************************************
    for(var users of hold) {
      downloadImageByURL(users.avatar_url, "./avatar-pics/" + users.login)
      console.log(users.avatar_url);
    }
  })

}


function downloadImageByURL(url, filePath) {
  // ...
  request.get(url)
    .on('error', function(err){
      throw err;
    })
    .on('response', function(response){
      console.log("Response Status Code: ", response.statusCode);
    })
    .pipe(fs.createWriteStream(filePath)
  );
}

var args = process.argv.slice(2);
if (args.length < 2) {
  console.log("termination")
} else {
  let repoOwner = args[0];
  let repoName = args[1];
  getRepoContributors(repoOwner, repoName, function(err, result) {
    console.log("Errors:", err);
  });
}