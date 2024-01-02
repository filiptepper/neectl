oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g neectl
$ neectl COMMAND
running command...
$ neectl (--version)
neectl/0.0.0 darwin-arm64 node-v20.10.0
$ neectl --help [COMMAND]
USAGE
  $ neectl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`neectl hello PERSON`](#neectl-hello-person)
* [`neectl hello world`](#neectl-hello-world)
* [`neectl help [COMMANDS]`](#neectl-help-commands)
* [`neectl plugins`](#neectl-plugins)
* [`neectl plugins:install PLUGIN...`](#neectl-pluginsinstall-plugin)
* [`neectl plugins:inspect PLUGIN...`](#neectl-pluginsinspect-plugin)
* [`neectl plugins:install PLUGIN...`](#neectl-pluginsinstall-plugin-1)
* [`neectl plugins:link PLUGIN`](#neectl-pluginslink-plugin)
* [`neectl plugins:uninstall PLUGIN...`](#neectl-pluginsuninstall-plugin)
* [`neectl plugins reset`](#neectl-plugins-reset)
* [`neectl plugins:uninstall PLUGIN...`](#neectl-pluginsuninstall-plugin-1)
* [`neectl plugins:uninstall PLUGIN...`](#neectl-pluginsuninstall-plugin-2)
* [`neectl plugins update`](#neectl-plugins-update)

## `neectl hello PERSON`

Say hello

```
USAGE
  $ neectl hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/filiptepper/neectl/blob/v0.0.0/src/commands/hello/index.ts)_

## `neectl hello world`

Say hello world

```
USAGE
  $ neectl hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ neectl hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/filiptepper/neectl/blob/v0.0.0/src/commands/hello/world.ts)_

## `neectl help [COMMANDS]`

Display help for neectl.

```
USAGE
  $ neectl help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for neectl.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.9/src/commands/help.ts)_

## `neectl plugins`

List installed plugins.

```
USAGE
  $ neectl plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ neectl plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/index.ts)_

## `neectl plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ neectl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ neectl plugins add

EXAMPLES
  $ neectl plugins add myplugin 

  $ neectl plugins add https://github.com/someuser/someplugin

  $ neectl plugins add someuser/someplugin
```

## `neectl plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ neectl plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ neectl plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/inspect.ts)_

## `neectl plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ neectl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ neectl plugins add

EXAMPLES
  $ neectl plugins install myplugin 

  $ neectl plugins install https://github.com/someuser/someplugin

  $ neectl plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/install.ts)_

## `neectl plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ neectl plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ neectl plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/link.ts)_

## `neectl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ neectl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ neectl plugins unlink
  $ neectl plugins remove

EXAMPLES
  $ neectl plugins remove myplugin
```

## `neectl plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ neectl plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/reset.ts)_

## `neectl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ neectl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ neectl plugins unlink
  $ neectl plugins remove

EXAMPLES
  $ neectl plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/uninstall.ts)_

## `neectl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ neectl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ neectl plugins unlink
  $ neectl plugins remove

EXAMPLES
  $ neectl plugins unlink myplugin
```

## `neectl plugins update`

Update installed plugins.

```
USAGE
  $ neectl plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.12/src/commands/plugins/update.ts)_
<!-- commandsstop -->
