const issueText = process.env.ISSUE;

if(issueText.includes('问题描述')) {
  process.env.ISSUE_CHECK_RESULT = 'pass'
}