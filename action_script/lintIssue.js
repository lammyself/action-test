import fs from 'fs'
const issueText = process.env.ISSUE;

if(issueText.includes('问题描述')) {
  fs.writeFile('$GITHUB_ENV', 'ISSUE_CHECK_RESULT=pass', (err) => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
}