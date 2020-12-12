import { Octokit } from '@octokit/rest'

const client = new Octokit({
  userAgent: 'yarc v0.1.0'
})

export default client
