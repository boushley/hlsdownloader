#!/usr/bin/env bash
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
console.dir(argv)
