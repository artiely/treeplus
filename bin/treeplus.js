#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: tp [options]')
  .example('tp -i node_modules', '排除node_modules文件夹')
  .alias('i', 'ignore')
  .alias('d', 'dir')
  .alias('l', 'lev')
  .describe('i', '您要排除显示的文件夹')
  .describe('d', '只打印文件夹')
  .describe('l', '指定打印的层级')
  .help('help').argv
const fs = require('fs')
const path = require('path')
const target = path.join(process.cwd())

function deep(target, depth, ignore) {
  var prefix = new Array(depth + 1).join('│ ')
  const dirinfo = fs.readdirSync(target)
  var dirs = []
  var files = []
  dirinfo.forEach(info => {
    var stats = fs.statSync(path.join(target, info))
    if (stats.isFile()) {
      files.push(info)
    } else {
      dirs.push(info)
    }
  })

  if (ignore && ignore.length > 0) {
    for (var i = 0; i < ignore.length; i++) {
      for (var j = 0; j < dirs.length; j++) {
        if (dirs[j] == ignore[i]) {
          dirs.splice(j, 1)
          j--
        }
      }
    }
  }

  dirs.forEach(dir => {
    console.log(`${prefix}├──${dir}`)
    // console.log('TCL: argv', argv.l, depth)
    if (!argv.l) {
      deep(path.join(target, dir), depth + 1)
    } else {
      if (argv.l > depth + 1) {
        deep(path.join(target, dir), depth + 1)
      }
    }
  })

  var count = files.length - 1
  if (!argv.d || !argv.dir) {
    files.forEach(file => {
      console.log(`${prefix}${count-- ? '├─' : '└─'}─${file}`)
    })
  }
}

if (argv.ignore) {
  if (argv.ignore !== true) {
    var _ignore = argv._
    _ignore.push(argv.ignore)
    deep(target, 0, _ignore)
  } else {
    deep(target, 0)
  }
} else {
  deep(target, 0)
}
