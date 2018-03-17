treeplus is a node module for creating and manipulating hierarchical tree structures.
很多时候我们在输出项目结构的时候 不需要输出node_modules或dist等文件，我们可以通过 -i 接上文件名来排除
# Install
```
$ npm install treeplus -g
```
# Usage
```
$ [tp|treeplus]
# or
$ [tp|treeplus] -i node_modules
```

# example
```
$ tp -i node_modules bin

# Returns

├──package-lock.json
├──package.json
└──README.md
```
```
$ tp -i node_modules

# Returns

├──bin
│ └──treeplus.js
├──package-lock.json
├──package.json
└──README.md
```
```
$ tp

# Returns

├──bin
│ └──treeplus.js
├──node_modules
│ ├──.bin
│ │ ├──which
│ │ └──which.cmd
│ ├──ansi-regex
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──camelcase
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──cliui
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE.txt
│ │ ├──package.json
│ │ └──README.md
│ ├──code-point-at
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──commander
│ │ ├──typings
│ │ │ └──index.d.ts
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ └──Readme.md
│ ├──cross-spawn
│ │ ├──lib
│ │ │ ├──util
│ │ │ │ ├──escapeArgument.js
│ │ │ │ ├──escapeCommand.js
│ │ │ │ ├──hasEmptyArgumentBug.js
│ │ │ │ ├──readShebang.js
│ │ │ │ └──resolveCommand.js
│ │ │ ├──enoent.js
│ │ │ └──parse.js
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ └──README.md
│ ├──decamelize
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──execa
│ │ ├──lib
│ │ │ ├──errname.js
│ │ │ └──stdio.js
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──find-up
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──get-caller-file
│ │ ├──index.js
│ │ ├──package.json
│ │ └──README.md
│ ├──get-stream
│ │ ├──buffer-stream.js
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──invert-kv
│ │ ├──index.js
│ │ ├──package.json
│ │ └──readme.md
│ ├──is-fullwidth-code-point
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──is-stream
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──isexe
│ │ ├──test
│ │ │ └──basic.js
│ │ ├──.npmignore
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──mode.js
│ │ ├──package.json
│ │ ├──README.md
│ │ └──windows.js
│ ├──lcid
│ │ ├──index.js
│ │ ├──lcid.json
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──locate-path
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──lru-cache
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ └──README.md
│ ├──mem
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──mimic-fn
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──npm-run-path
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──number-is-nan
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──os-locale
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──p-finally
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──p-limit
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──p-locate
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──p-try
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──path-exists
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──path-key
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──pseudomap
│ │ ├──test
│ │ │ └──basic.js
│ │ ├──LICENSE
│ │ ├──map.js
│ │ ├──package.json
│ │ ├──pseudomap.js
│ │ └──README.md
│ ├──require-directory
│ │ ├──.jshintrc
│ │ ├──.npmignore
│ │ ├──.travis.yml
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ └──README.markdown
│ ├──require-main-filename
│ │ ├──.npmignore
│ │ ├──.travis.yml
│ │ ├──index.js
│ │ ├──LICENSE.txt
│ │ ├──package.json
│ │ ├──README.md
│ │ └──test.js
│ ├──set-blocking
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE.txt
│ │ ├──package.json
│ │ └──README.md
│ ├──shebang-command
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──shebang-regex
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──signal-exit
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE.txt
│ │ ├──package.json
│ │ ├──README.md
│ │ └──signals.js
│ ├──string-width
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──strip-ansi
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──strip-eof
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──which
│ │ ├──bin
│ │ │ └──which
│ │ ├──CHANGELOG.md
│ │ ├──LICENSE
│ │ ├──package.json
│ │ ├──README.md
│ │ └──which.js
│ ├──which-module
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ └──README.md
│ ├──wrap-ansi
│ │ ├──node_modules
│ │ │ ├──ansi-regex
│ │ │ │ ├──index.js
│ │ │ │ ├──license
│ │ │ │ ├──package.json
│ │ │ │ └──readme.md
│ │ │ ├──is-fullwidth-code-point
│ │ │ │ ├──index.js
│ │ │ │ ├──license
│ │ │ │ ├──package.json
│ │ │ │ └──readme.md
│ │ │ ├──string-width
│ │ │ │ ├──index.js
│ │ │ │ ├──license
│ │ │ │ ├──package.json
│ │ │ │ └──readme.md
│ │ │ ├──strip-ansi
│ │ │ │ ├──index.js
│ │ │ │ ├──license
│ │ │ │ ├──package.json
│ │ │ │ └──readme.md
│ │ ├──index.js
│ │ ├──license
│ │ ├──package.json
│ │ └──readme.md
│ ├──y18n
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ └──README.md
│ ├──yallist
│ │ ├──iterator.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ ├──README.md
│ │ └──yallist.js
│ ├──yargs
│ │ ├──lib
│ │ │ ├──apply-extends.js
│ │ │ ├──argsert.js
│ │ │ ├──command.js
│ │ │ ├──completion.js
│ │ │ ├──levenshtein.js
│ │ │ ├──obj-filter.js
│ │ │ ├──usage.js
│ │ │ ├──validation.js
│ │ │ └──yerror.js
│ │ ├──locales
│ │ │ ├──be.json
│ │ │ ├──de.json
│ │ │ ├──en.json
│ │ │ ├──es.json
│ │ │ ├──fr.json
│ │ │ ├──hi.json
│ │ │ ├──hu.json
│ │ │ ├──id.json
│ │ │ ├──it.json
│ │ │ ├──ja.json
│ │ │ ├──ko.json
│ │ │ ├──nb.json
│ │ │ ├──nl.json
│ │ │ ├──nn.json
│ │ │ ├──pirate.json
│ │ │ ├──pl.json
│ │ │ ├──pt.json
│ │ │ ├──pt_BR.json
│ │ │ ├──ru.json
│ │ │ ├──th.json
│ │ │ ├──tr.json
│ │ │ ├──zh_CN.json
│ │ │ └──zh_TW.json
│ │ ├──CHANGELOG.md
│ │ ├──completion.sh.hbs
│ │ ├──index.js
│ │ ├──LICENSE
│ │ ├──package.json
│ │ ├──README.md
│ │ └──yargs.js
│ ├──yargs-parser
│ │ ├──lib
│ │ │ └──tokenize-arg-string.js
│ │ ├──CHANGELOG.md
│ │ ├──index.js
│ │ ├──LICENSE.txt
│ │ ├──package.json
│ │ └──README.md
├──package-lock.json
├──package.json
└──README.md
```