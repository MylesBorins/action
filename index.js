const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

console.log(JSON.stringify(context.payload));

const name = context.payload.name;
const conclusion = context.payload.conclusion
const sha = context.payload.head_sha;

if (name.startsWith('Build') && conclusion === 'success' && context.payload.pull_requests[0]) {
  request('POST /repos/:owner/:repo/issues/:number/comments', context.repo({
    number: context.payload.pull_requests[0].number,
    body: `Preview at: https://storage.googleapis.com/nodejs-dev-staging/${sha.slice(0,7)}/index.html`
  }));
}
