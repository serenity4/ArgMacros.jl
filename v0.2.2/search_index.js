var documenterSearchIndex = {"docs":
[{"location":"macros/#Available-Macros","page":"Available Macros","title":"Available Macros","text":"","category":"section"},{"location":"macros/#@...arguments","page":"Available Macros","title":"@...arguments","text":"","category":"section"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"The @...arguments begin ... end block will hold all of your ArgMacros code. The Using Argument Values section provides a good comparison of the different available macros.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@inlinearguments\n@structarguments\n@tuplearguments\n@dictarguments","category":"page"},{"location":"macros/#ArgMacros.@inlinearguments","page":"Available Macros","title":"ArgMacros.@inlinearguments","text":"@inlinearguments begin ... end\n\nDenote and setup a block with other macros from ArgMacros\n\nExample\n\nfunction julia_main()\n    @inlinearguments begin\n        ...\n        @argumentrequired Int foo \"-f\" \"--foo\"\n        @argumentdefault Int 5 bar \"-b\" \"--bar\"\n        ...\n    end\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@structarguments","page":"Available Macros","title":"ArgMacros.@structarguments","text":"@structarguments mutable typename begin ... end\n\nDenote and setup a block with other macros from ArgMacros     Defines an optionally mutable struct type based on the arguments and a zero-argument constructor     which will generate an instance of the struct based on the parsed arguments.\n\nExample\n\n@structarguments false Args begin\n    ...\n    @argumentrequired Int foo \"-f\" \"--foo\"\n    @argumentdefault Int 5 bar \"-b\" \"--bar\"\n    ...\nend\n\nfunction julia_main()\n    args = Args()\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@tuplearguments","page":"Available Macros","title":"ArgMacros.@tuplearguments","text":"@tuplearguments begin ... end\n\nDenote and setup a block with other macros from ArgMacros     Return a NamedTuple with the arguments instead of dumping them in the enclosing namespace    \n\nExample\n\nfunction julia_main()\n    args = @tuplearguments begin\n        ...\n        @argumentrequired Int foo \"-f\" \"--foo\"\n        @argumentdefault Int 5 bar \"-b\" \"--bar\"\n        ...\n    end\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@dictarguments","page":"Available Macros","title":"ArgMacros.@dictarguments","text":"@dictarguments begin ... end\n\nDenote and setup a block with other macros from ArgMacros     Return a Dict with the arguments instead of dumping them in the enclosing namespace    \n\nExample\n\nfunction julia_main()\n    args = @dictarguments begin\n        ...\n        @argumentrequired Int foo \"-f\" \"--foo\"\n        @argumentdefault Int 5 bar \"-b\" \"--bar\"\n        ...\n    end\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#Option-Arguments","page":"Available Macros","title":"Option Arguments","text":"","category":"section"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"These arguments are specified by long and/or short flags (e.g. -v, --verbose), and all follow a similar format.     It is important to put these before positional arguments.     Additionally, it is recommended to specify the short flag first when using multiple flags.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@argumentrequired\n@argumentdefault\n@argumentoptional\n@argumentflag\n@argumentcount","category":"page"},{"location":"macros/#ArgMacros.@argumentrequired","page":"Available Macros","title":"ArgMacros.@argumentrequired","text":"@argumentrequired type local_name flags::String...\n\nGet a required argument specified by the given flags and store in the variable local_name with the specified type.\n\nPrint a message and exit the program if the value is not found or cannot be converted to the specified type.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @argumentrequired String output_file \"-o\" \"--output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@argumentdefault","page":"Available Macros","title":"ArgMacros.@argumentdefault","text":"@argumentdefault type default_value local_name flags::String...\n\nAttempt to get an argument specified by the given flags and store in the variable local_name with the specified type. Store the default value instead if the flags cannot be found. Default value automatically converted to specified type.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @argumentdefault String \"output.txt\" output_file \"-o\" \"--output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@argumentoptional","page":"Available Macros","title":"ArgMacros.@argumentoptional","text":"@argumentoptional type local_name flags::String...\n\nAttempt to get an argument specified by the given flags and store in the variable local_name with the type Union{type, Nothing}. Store nothing if the flags cannot be found.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @argumentoptional String output_file \"-o\" \"--output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@argumentflag","page":"Available Macros","title":"ArgMacros.@argumentflag","text":"@argumentflag local_name flags::String...\n\nStore true in the variable local_name with type Bool if one or more of the flags is found. Otherwise, store false.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @argumentflag verbose \"-v\" \"--verbose\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@argumentcount","page":"Available Macros","title":"ArgMacros.@argumentcount","text":"@argumentcount local_name flag::String\n\nStore the number of occurrences of flag in local_name with type Int.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @argumentcount verbose \"-v\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#Positional-Arguments","page":"Available Macros","title":"Positional Arguments","text":"","category":"section"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"These arguments are specified by their position in the command. You must specify these in your code in the same order that users are expected to enter them. It is important to put these after all option arguments, and specify the required positional arguments first.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@positionalrequired\n@positionaldefault\n@positionaloptional","category":"page"},{"location":"macros/#ArgMacros.@positionalrequired","page":"Available Macros","title":"ArgMacros.@positionalrequired","text":"@positionalrequired type local_name [help_name::String]\n\nAttempt to get a positional argument and store in variable local_name with the specified type.\n\nPositional arguments are read in order after all flag/option arguments have been read.   help_name used instead of local_name in messages to user if specified.\n\nPrint a message and exit the program if a value is not found or cannot be converted to the specified type.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @positionalrequired String output_file \"output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@positionaldefault","page":"Available Macros","title":"ArgMacros.@positionaldefault","text":"@positionaldefault type default_value local_name [help_name::String]\n\nAttempt to get a positional argument and store in variable local_name with the specified type. Store the default value instead if an argument cannot be found.\n\nPositional arguments are read in order after all flag/option arguments have been read.   help_name used instead of local_name in messages to user if specified.\n\nDefault value automatically converted to specified type.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @positionaldefault String output_file \"output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@positionaloptional","page":"Available Macros","title":"ArgMacros.@positionaloptional","text":"@positionaloptional type local_name [help_name]\n\nAttempt to get a positional argument and store in variable local_name with the type Union{type, Nothing}. Store nothing if an argument is not found.\n\nPositional arguments are read in order after all flag/option arguments have been read.   help_name used instead of local_name in messages to user if specified.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @positionaloptional String output_file \"output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#Help-Options","page":"Available Macros","title":"Help Options","text":"","category":"section"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"These macros are used to generate the help screen for your program. Note that usage will NOT be automatically generated if it is unspecified.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@helpusage, @helpdescription, and @helpepilog can be placed anywhere in the @beginarguments block with identical effect. However, placing them in that order at the beginning of the block is recommended.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@arghelp, however, will always apply to the last argument declared before it appears.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@helpusage\n@helpdescription\n@helpepilog\n@arghelp","category":"page"},{"location":"macros/#ArgMacros.@helpusage","page":"Available Macros","title":"ArgMacros.@helpusage","text":"@helpusage usage_text::String\n\nAdd usage text for the help screen   Automatically prepended with \"Usage: \"\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    @helpusage \"example.jl foo [bar] [-v]\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@helpdescription","page":"Available Macros","title":"ArgMacros.@helpdescription","text":"@helpdescription description::String\n\nAdd description for the help screen  \n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @helpdescription \"Lorem ipsum dolor sit amet\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@helpepilog","page":"Available Macros","title":"ArgMacros.@helpepilog","text":"@helpepilog epilog::String\n\nAdd epilog for the help screen, displayed after rest of help \n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @helpepilog \"Lorem ipsum dolor sit amet\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@arghelp","page":"Available Macros","title":"ArgMacros.@arghelp","text":"@arghelp help_text::String\n\nAdd help string for an argument.   Applied to the preceding declared argument\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @argumentflag v \"-v\" \"--verbose\"\n    @arghelp \"Display additional output\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#Additional-Options","page":"Available Macros","title":"Additional Options","text":"","category":"section"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"These options can be used to validate argument values or change parsing behavior.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"It is recommended to place @argtest immediately after the argument it applies to, and @allowextraarguments before or after all of the arguments are declared.","category":"page"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"@argtest\n@allowextraarguments","category":"page"},{"location":"macros/#ArgMacros.@argtest","page":"Available Macros","title":"ArgMacros.@argtest","text":"@argtest argname func [desc]\n\nApply func to the value stored in argname, printing an error message (optionally specified by desc) and the program  if func returns false.   Test skipped if argname has value nothing (only possible for optional arguments).   This macro must be used AFTER declaring the arugment with another macro.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @positionalrequired String input_file\n    @argtest input_file isfile \"Couldn't find the input file.\"\n    ...\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#ArgMacros.@allowextraarguments","page":"Available Macros","title":"ArgMacros.@allowextraarguments","text":"@allowextraarguments\n\nDisables the default behavior of printing a message and exiting the program when not all values in ARGS could be assigned to specified arguments.\n\nMust be used in @beginarguments begin ... end block\n\nExample\n\n@beginarguments begin\n    ...\n    @allowextraarguments\nend\n\n\n\n\n\n","category":"macro"},{"location":"macros/#Index","page":"Available Macros","title":"Index","text":"","category":"section"},{"location":"macros/","page":"Available Macros","title":"Available Macros","text":"","category":"page"},{"location":"#Guide","page":"Guide","title":"Guide","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"This page will offer an introduction on using ArgMacros to read command-line arguments. Reading through this before using the package is recommended.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"note: Note\nVersion 0.2.x of ArgMacros might be rough around some edge cases.  Make sure to test the interface you build before using it. If you notice any issues or want to request new features, create an issue on GitHub","category":"page"},{"location":"#Why-ArgMacros?","page":"Guide","title":"Why ArgMacros?","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"ArgMacros is designed for parsing arguments in command-line Julia scripts. Compilation time is the greatest bottleneck for startup of scripts in Julia, and is mostly unavoidable. ArgMacros provides quick parsing after compilation while ensuring compilation time fast too.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"ArgMacros also provides convenience when writing scripts by offering various and easily interchangeable formats for outputting parsed arguments, a simple interface, and guaranteed type safety of parsed arguments. Some output formats also provide static typing of the argument variables.","category":"page"},{"location":"#Installation","page":"Guide","title":"Installation","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"Install ArgMacros using Julia's Pkg package manager. Enter the Pkg prompt by typing ] at the REPL and then install:","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"(@v1.5) pkg> add ArgMacros","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"Then load ArgMacros into your script with using ArgMacros.","category":"page"},{"location":"#Argument-Format-Types","page":"Guide","title":"Argument Format Types","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"There are four formats for your program or script to receive the parsed arguments with ArgMacros, all of which use the same interface for argument declaration:  ","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"Inline, typed local variables (@inlinearguments)\nAn automatically generated custom struct type (@structarguments)\nNamedTuple (@tuplearguments)\nDict (@dictarguments)","category":"page"},{"location":"#Adding-Arguments","page":"Guide","title":"Adding Arguments","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"All arguments must be declared using the macros provided, and all of the declarations must exist within the @inlinearguments block, or other argument macro block, like so:","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"@inlinearguments begin\n    *arguments go here*\nend","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"The types of arguments supported are broken down into two categories:","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"Options (@argument...) - Marked with flags\n@argumentrequired\n@argumentdefault\n@argumentoptional\n@argumentflag\n@argumentcount\nPositionals (@positional...) - Identified by position in argument list\n@positionalrequired\n@positionaldefault\n@positionaloptional","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"The arguments are either required, optional, or have default values, as is evident in their names. Additionally, @argumentflag checks the presence of a flag, and @argumentcount counts how many times a flag appears. Most of the argument types require specifying a type and a local variable name, while options also require flag(s) to be specified, and default arguments require their default value to be specified.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"Parsing is carried out by fetching values for the options first, then the positional arguments. Values will be fetched in the order that arguments are declared.  For this reason, ALL options must be declared before ANY positionals, required  positionals must be declared before default/optional ones, and positional arguments must be declared in the order the user is expected to enter them.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"You should make your argument types Symbol, String, or subtypes of Number.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"Here is an example with some arguments:","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"@inlinearguments begin\n    @argumentrequired String foo \"-f\" \"--foo\"\n    @argumentdefault String \"lorem ipsum\" bar \"--bar\"\n    @argumentflag verbose \"-v\"\n    @positionalrequired String input \"input_file\"\n    @positionaloptional String output \"output_file\"\nend","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"As you can see, options allow using long option names, short option names, or both. @argumentcount is a special case and only allows a single long or short name to be given. Positionals allow an optional \"help name\" to be specified, which is presented to the user instead of the name of local variable they will be stored in.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"note: Note\nThe ordering rules for argument declarations should be enforced at compile time, but making sure to follow them is essential to your code running properly. Additionally, make sure not to declare multiple arguments using the same flags. Other than the reserved -h and --help flags, this will not be detected automatically at compile time, and could lead to undefined behavior. ","category":"page"},{"location":"#Using-Argument-Values","page":"Guide","title":"Using Argument Values","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"Once an argument is decalred, you can be sure it holds a value of the correct type. @argumentoptional and @positionaloptional will use the type Union{T, Nothing}, however, and may also contain nothing. @argumentflag uses Bool and @argumentcount uses Int. The other macros will all store the type specified.  ","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"How exactly you use the values depends on the format used, the following will demonstrate the same arguments with each of the available formats, and some of the consequences of each of them:","category":"page"},{"location":"#Inline-([@inlinearguments](@ref))","page":"Guide","title":"Inline (@inlinearguments)","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"The arguments are stored directly in local variables, which are statically typed. You can use them immediately without any other boilerplate, but must respect the variable types. These variables, because they are typed, must always be in local scope. You cannot put this block in a global scope.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"function main()\n    @inlinearguments begin\n        @positionalrequired Int x\n        @positionaldefault Int 5 y\n        @positionaloptional Int z\n    end\n\n    println(x + y) # Prints x + y, the variable names are available right away and must be Ints\n    println(isnothing(z)) # z might be nothing, because it was optional\n    z = nothing # It is fine to store values of type Nothing or Int in z now\n    z = 8\n    x = 5.5 # Raises an error, x must hold Int values\n    y = nothing # Raises an error, only optional arguments can hold nothing\nend","category":"page"},{"location":"#Custom-struct-([@structarguments](@ref))","page":"Guide","title":"Custom struct (@structarguments)","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"A new struct type is created to store the arguments, and you can decide if it will be mutable.   The zero-argument constructor function for the new type parses the arguments when it is called.   You must declare the arguments in global scope due to the rules for type declarations, but the constructor can be used anywhere.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"The fields of the struct will all be typed.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"# Declare mutable type Args and the arguments it will hold\n@structarguments true Args begin\n        @positionalrequired Int x\n        @positionaldefault Int 5 y\n        @positionaloptional Int z\nend\n\nfunction main()\n    args = Args() # The arguments are parsed here\n\n    println(args.x + args.y) # Prints x + y, the variables must be Ints\n    println(isnothing(args.z)) # z might be nothing, because it was optional\n    \n    # These assignemnt operations would all fail if we made Args immutable instead\n    args.z = nothing # It is fine to store values of type Nothing or Int in z now\n    args.z = 8\n    args.x = 5.5 # Raises an error, x must hold Int values\n    args.y = nothing # Raises an error, only optional arguments can hold nothing\nend","category":"page"},{"location":"#NamedTuple-([@tuplearguments](@ref))","page":"Guide","title":"NamedTuple (@tuplearguments)","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"A NamedTuple is returned containing all of the argument values, keyed by the variable names given. You can use this version from any scope. All of the fields are typed, and as a NamedTuple the returned object will be immutable.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"function main()\n    args = @tuplearguments begin\n        @positionalrequired Int x\n        @positionaldefault Int 5 y\n        @positionaloptional Int z\n    end\n\n    println(args.x + args.y) # Prints x + y, the variables must be Ints\n    println(isnothing(args.z)) # z might be nothing, because it was optional\n    \n    # These assignemnt operations will fail because NamedTuples are always immutable\n    args.z = nothing\n    args.z = 8\n\n    args.x == 5.5 # Can never be true, args.x is guaranteed to be an Int\n    isnothing(args.y) # Must be false, y is not optional\nend","category":"page"},{"location":"#Dict-([@dictarguments](@ref))","page":"Guide","title":"Dict (@dictarguments)","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"A Dict{Symbol, Any} is returned containing all of the argument variables, keyed by the argument names as Symbols. You can use this version from any scope. The Dict type is mutable, and any type can be stored in any of its fields. Therefore, this version does not provide as strong of a guarantee about types to the compuler when argument values are used later. However, the values will always be of the correct types when the Dict is first returned.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"function main()\n    args = @dictarguments begin\n        @positionalrequired Int x\n        @positionaldefault Int 5 y\n        @positionaloptional Int z\n    end\n\n    println(args[:x] + args[:y]) # Prints x + y, the variable names are available right away and must be Ints at first\n    println(isnothing(args[:z])) # z might be nothing, because it was optional\n    args[:z] = nothing # It is fine to store values of any type in z now\n    args[:z] = 8\n    args[:x] = 5.5 # Same for x\n    args[:y] = nothing # And y\n    args[:a] = \"some string\" # New entries can even be added later, of any type\nend","category":"page"},{"location":"#Validating-Arguments","page":"Guide","title":"Validating Arguments","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"Perhaps you want to impose certain conditions on the values of an argument beyond its type. You can use the @argtest macro, which will exit the program if a specified unary predicate returns false for the argument value.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"If using an operator function, make sure to enclose it in parentheses so it is passed to the  macro as a separate expression from the first argument.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"@inlinearguments begin\n    ...\n    @positionalrequired String input \"input_file\"\n    @argtest input isfile \"The input must be a valid file\" # Confirm that the input file really exists\n    ...\nend","category":"page"},{"location":"#Adding-Help","page":"Guide","title":"Adding Help","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"ArgMacros also allows you to create a help screen, accessed by the -h or --help flags. A listing of arguments and their types is created by default, but usage information,  a description, an epilog, and individual argument descriptions can be specified too using the appropriate macros. When using the @arghelp macro, note that it always applies to the last argument declared BEFORE the macro is used. The @helpusage will prepend your usage text with \"Usage: \", so do not include this in the string you pass.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"It is recommended to place @helpusage, @helpdescription, and @helpepilog in that order at the beginning of the @...arguments block, but this is not a requirement.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"@inlinearguments begin\n    @helpusage \"example.jl input_file [output_file] [-f | --foo] [--bar] [-v]\"\n    @helpdescription \"\"\"\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Praesent eu auctor risus. Morbi a nisl nisi.\n        Ut at lorem non lorem accumsan auctor. Class aptent taciti\n        sociosqu ad litora torquent per conubia nostra, per inceptos\n        himenaeos. Aenean ornare ultrices tellus quis convallis.\n        \"\"\"\n    @helpepilog \"© 2020\"\n    ...\n    @positionalrequired String input \"input_file\"\n    @argtest input isfile \"The input must be a valid file\"\n    @arghelp \"The name of the file to be taken as input.\"\n    ...\nend","category":"page"},{"location":"#Leftover-Arguments","page":"Guide","title":"Leftover Arguments","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"By default, the program will exit and print a warning if more arguments are given than the program declares. If you don't want this to happen, include the @allowextraarguments macro.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"This can occur anywhere inside the @...arguments block, but the recommended placement is at the end, after all other help, test, and argument declarations.","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"@inlinearguments begin\n    ...\n    @allowextraarguments\nend","category":"page"},{"location":"#Taking-Argument-Code-out-of-Main-Function","page":"Guide","title":"Taking Argument Code out of Main Function","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"It may be preferable, in some cases, not to declare all of your arguments and help information inside of your main function. In this case, the @inlinearguments block can be enclosed in a macro:","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"macro handleargs()\n    return esc(quote\n        @inlinearguments begin\n            ...\n        end\n    end)\nend\n\nfunction main()\n    @handleargs\n    ...\n    # The argument values will be available here\nend","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"The other formats provide more flexibility. The argument code for @tuplearguments and @dictarguments can be placed anywhere, including in a separate function which returns their result. @structarguments requires that you declare your arguments in the global namespace (not inside a function, loop, or let block), but this will automatically produce the zero-argument constructor function that you can then call wherever you like.","category":"page"},{"location":"#Calling-a-Julia-Script-With-Arguments","page":"Guide","title":"Calling a Julia Script With Arguments","text":"","category":"section"},{"location":"","page":"Guide","title":"Guide","text":"To call a Julia script with arguments from your terminal, run","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"$ julia --flag-for-julia value1 -- myscript.jl value2 --flag-for-script value3","category":"page"},{"location":"","page":"Guide","title":"Guide","text":"The -- before the script name is not always necessary, but it is useful because it explicitly separates arguments passed to the Julia interpreter from arguments passed to your script.","category":"page"}]
}
