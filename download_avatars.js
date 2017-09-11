var request = require('request');
var GITHUB_USER = "NicholasSmiloivc";
var GITHUB_TOKEN = "f3845a0b910e2e288fb6d7e10ab6ca146c5c596c";
console.log('Welcome to the Github Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // console.log(requestURL);
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  options = {
    'url': requestURL,
    headers:{
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  }
  request.get(options)
  .on('err', function (){
    throw err;
  })
  .on('response', function(response){
    //   console.log("chunks: ", chunks);
    console.log("Response Status Code: ", response.statusCode)
    console.log("Response Status Message: ", response.statusMessage)
  });

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});