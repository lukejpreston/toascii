const chalk = require('chalk')
const yargs = require('yargs')
const figlet = require('figlet')
const Chance = require('chance')
const changeCase = require('change-case')
const fs = require('fs')
const path = require('path')

const chance = new Chance()

const argv = yargs.argv

const fonts = figlet.fontsSync()

if (argv.help || argv.h) {
    console.log(fs.readFileSync(path.resolve(__dirname, 'help.txt')).toString())
    process.exit(0)
}

if (argv.fonts && (argv.colors || argv.bgColors)) {
    console.log('# Fonts')
    console.log(fonts.join('\n'))
    console.log(fs.readFileSync(path.resolve(__dirname, 'colors.txt')).toString())
}

if (argv.fonts) {
    console.log('# Fonts')
    console.log(fonts.join('\n'))
    process.exit(0)
}

if (argv.colors || argv.bgColors) {
    console.log(fs.readFileSync(path.resolve(__dirname, 'colors.txt')).toString())
    process.exit(0)
}

const words = [
    'No words',
    'Blank String',
    'Missing Text Value',
    'Bazingoh?'
]

text = argv.text || argv.t || argv._[0] || chance.pick(words)
color = argv.color || argv.c || argv._[1] || false
bgColor = argv.bgColors || argv.b || argv._[2] || false
font = argv.font || argv.f || argv._[3] || chance.pick(fonts)

if (bgColor) bgColor = `bg${changeCase.upperCaseFirst(bgColor)}`

let logger = text => text

if (color && bgColor) logger = chalk[color][bgColor]
else if (color) logger = chalk[color]
else if (bgColor) logger = chalk[bgColor]

console.log(logger(figlet.textSync(text, { font })))