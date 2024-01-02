import { expect, test } from '@oclif/test'

describe('led', () => {
  test
  .stdout()
  .command(['led', '50', '4000'])
  .it('runs led command', ctx => {
    expect(ctx.stdout).to.contain('LED light set to 50% brightness and 4000K temperature.')
  })
})
