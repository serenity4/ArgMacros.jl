# ArgMacros

[![](https://img.shields.io/badge/docs-stable-blue.svg)](https://zachmatson.github.io/ArgMacros.jl/stable)
[![](https://img.shields.io/badge/docs-dev-blue.svg)](https://zachmatson.github.io/ArgMacros.jl/dev)

Performant, flexible, macro-based, Julia package for parsing command line arguments.    
Uses macros to generate the parsing code within your script, directly storing
results in typed local variables, an autogenerated custom `struct` type, `NamedTuple`, or `Dict`

## Installation

Install ArgMacros using Julia's Pkg package manager. Enter the Pkg prompt
by typing `]` at the REPL and then install:

```julia-repl
(@v1.5) pkg> add ArgMacros
```

Then load ArgMacros into your script with `using ArgMacros`.

## Usage

Please read the documentation before using this package.