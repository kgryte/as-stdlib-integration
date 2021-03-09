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

var assert = require( 'assert' );
var mod = require( './../' );


// MAIN //

assert.equal( mod.stdlib_sin( 0.5 ), 0.479425538604203 );
console.log( 'ok' );

assert.equal( mod.native_sin( 0.5 ), 0.479425538604203 );
console.log( 'ok' );
