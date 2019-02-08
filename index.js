const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

const sha = context.payload.pull_request.head.sha;

request('POST /repos/:owner/:repo/pulls/:number/comments', context.repo({
  number: context.payload.pull_request.number,
  body: `Preview at: https://storage.googleapis.com/nodejs-dev-staging/${sha.slice(0,7)}/index.html`
}));
