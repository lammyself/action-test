const issueText = process.env.ISSUE;

if(issueText.includes('问题描述')) {
  console.log('ISSUE_CHECK_RESULT=pass');
} else {
  console.log('ISSUE_CHECK_RESULT=unqualified');
}