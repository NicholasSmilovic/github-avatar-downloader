var request = require('request');
var GITHUB_USER = "NicholasSmiloivc";
var GITHUB_TOKEN = "f3845a0b910e2e288fb6d7e10ab6ca146c5c596c";
console.log('Welcome to the Github Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  request.get(requestURL)
    .on('err', function (){
      throw err;
    })
    .on('response', function(chunks){
      console.log("chunks: ", chunks);
    });

}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});