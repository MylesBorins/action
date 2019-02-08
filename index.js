const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

const sha = 'context.payload.pull_request.head.sha';
const link = isWip ? 'pending' : 'success'

// https://developer.github.com/v3/repos/statuses/#create-a-status
request('POST /repos/:owner/:repo/statuses/:sha', context.repo({
  sha,
  state: 'success',
  target_url: 'https://github.com/mylesborins/action',
  description: `https://storage.googleapis.com/nodejs-dev-staging/${sha}/`,
  context: 'Staging Link'
}));
