const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

const name = context.payload.name;
const conclusion = context.payload.conclusion
const sha = context.payload.pull_request.head.sha;

console.log(JSON.stringify(context.payload));

if (name.startsWith('Build') && conclusion === 'success') {
  request('POST /repos/:owner/:repo/issues/:number/comments', context.repo({
    number: context.payload.pull_request.number,
    body: `Preview at: https://storage.googleapis.com/nodejs-dev-staging/${sha.slice(0,7)}/index.html`
  }));
}
