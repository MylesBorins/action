const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

const sha = context.payload.pull_request.head.sha;

request('POST /repos/:owner/:repo/statuses/:sha', context.repo({
  sha,
  state: 'success',
  target_url: `https://storage.googleapis.com/nodejs-dev-staging/${sha}/`,
  description: `Click details to preview changes`,
  context: 'Staging Link'
}));
