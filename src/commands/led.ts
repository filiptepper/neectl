import { Args, Command } from '@oclif/core'

export default class Led extends Command {
  static args = {
    brightness: Args.integer({ description: 'LED brightness', required: true }),
    temperature: Args.integer({ description: 'LED temperature', required: true }),
  }

  static description = 'Control Neewer LED light.'

  static examples = [
    `$ neectl led 100 5600
# sets LED light brightness to 100% and temperature to 5600K
`,
  ]

  async run(): Promise<void> {
    const { args } = await this.parse(Led)

    this.log(`LED light set to ${args.brightness}% brightness and ${args.temperature}K temperature.`)
  }
}
