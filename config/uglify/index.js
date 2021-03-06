
// kye

module.exports = function(env) { return {

	warnings:false,
	mangle:false,
	compress:{

		sequences     : true,  // join consecutive statemets with the “comma operator”
		properties    : true,  // optimize property access: a["foo"] → a.foo
		dead_code     : true,  // discard unreachable code
		drop_debugger : true,  // discard “debugger” statements
		unsafe        : false, // some unsafe optimizations (see below)
		conditionals  : true,  // optimize if-s and conditional expressions
		comparisons   : true,  // optimize comparisons
		evaluate      : true,  // evaluate constant expressions
		booleans      : true,  // optimize boolean expressions
		loops         : true,  // optimize loops
		unused        : true,  // drop unused variables/functions
		hoist_funs    : true,  // hoist function declarations
		hoist_vars    : false, // hoist variable declarations
		if_return     : true,  // optimize if-s followed by return/continue
		join_vars     : true,  // join var declarations
		cascade       : true,  // try to cascade `right` into `left` in sequences
		side_effects  : true,  // drop side-effect-free statements
		global_defs   : {}     // global definitions

	},
	output:{

		indent_start  : 0,     // start indentation on every line (only when `beautify`)
		indent_level  : 3,     // indentation level (only when `beautify`)
		quote_keys    : false, // quote all keys in object literals?
		space_colon   : true,  // add a space after colon signs?
		ascii_only    : false, // output ASCII-safe? (encodes Unicode characters as ASCII)
		inline_script : false, // escape "</script"?
		width         : 80,    // informative maximum line width (for beautified output)
		max_line_len  : 333,   // maximum line length (for non-beautified output)
		screw_ie8     : true,  // ooooooh yeah
		beautify      : false, // beautify output?
		source_map    : null,  // output a source map
		bracketize    : false, // use brackets every time?
		comments      : false, // output comments?
		semicolons    : true   // use semicolons to separate statements? (otherwise, newlines)

	}

}}
