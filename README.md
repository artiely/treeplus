> treeplus is a node module for creating and manipulating hierarchical tree structures.

> 很多时候我们在输出项目结构， 但是我们需要排除一些文件或者只需要文件夹结构，treeplus 就很好的实现了这些。

# Install

```bash
$ npm install treeplus -g
```

# Usage

```bash
$ [tp|treeplus]
# or
$ [tp|treeplus] --help 查看帮助
```

# example

```bash
$ tp -i node_modules
# 指定参数，排除单个目录
# Returns

├──bin
│ └──treeplus.js
├──package-lock.json
├──package.json
└──README.md
```

```bash
# 指定参数，排除多个目录
$ tp -i node_modules bin

# Returns

├──package-lock.json
├──package.json
└──README.md
```

```bash
# 指定参数，只打印文件夹
$ tp -d

# Returns

├──bin
```

```bash
# 指定参数，打印指定的层级,参数大于0
$ tp -l 1

# Returns

├──bin
```

```bash
# 多参数结合使用
$ tp -d -l 2 -i node_modules

# Returns

├──bin
```

```bash
$ tp

# Returns

├──bin
│ └──treeplus.js
├──node_modules
│ ├──.bin
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
