function getIssues() {
  //After the issue is created, fetch and display a list of all issues associated with your repository on the page. Append them to a div with an id of "issues".
}

function showIssues(json) {
}

function createIssue() {
  //Create a new issue for your forked repository with the createIssue function. Use the title and body values from the provided form.
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();
  //use fetch to fork it!
  //Fork this repository
  //Display the JSON result in the results div by calling showForkedRepo
  //POST /repos/:owner/:repo/forks
  ///api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/
  fetch('https://api.github.com/repos/' + repo, {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));

}

function showForkedRepo (){
  //display the repo information in the browser by appending html with a link to the repository url to the DOM.
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //const token = '';
  return ''
  //return token
}
