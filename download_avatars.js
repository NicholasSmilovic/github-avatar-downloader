var request = require('request');
console.log('Welcome to the Github Avatar Downloader!');

// function getRepoContributors(repoOwner, repoName, cb) {
//   request.get('https://api.github.com/repos/'+repoOwner+'/'+repoName+'/contributors')
//     .on('err', function (){
//       throw err;
//     })
//     .on('response', function(chunks){
//       console.log("chunks: ", chunks);
//     });

// }
// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});