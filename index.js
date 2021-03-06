/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

var join = require( 'path' ).join;
var loader = require( '@assemblyscript/loader' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var sin = require( '@stdlib/math/base/special/sin' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

var src = readFile( join( __dirname, '/build/optimized.wasm' ) );
var mod = loader.instantiateSync( src, {
	'sin': {
		'sin': sin,
		'js_sin': Math.sin
	},
	'exp': {
		'exp': exp,
		'js_exp': Math.exp
	}
});


// EXPORTS //

module.exports = mod.exports;
