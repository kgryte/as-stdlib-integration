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

import { sin, js_sin } from './sin';
import { exp, js_exp } from './exp';

/**
* Wraps the `sin` function from stdlib.
*/
export function stdlib_sin( x: f64 ): f64 {
  return sin( x );
}

/**
* Wraps the `sin` function from the JavaScript standard library.
*/
export function builtin_sin( x: f64 ): f64 {
  return js_sin( x );
}

/**
* Wraps the `sin` from the AssemblyScript standard library.
*/
export function native_sin( x: f64 ): f64 {
	return Math.sin( x );
}

/**
* Wraps the `exp` function from stdlib.
*/
export function stdlib_exp( x: f64 ): f64 {
  return exp( x );
}

/**
* Wraps the `exp` function from the JavaScript standard library.
*/
export function builtin_exp( x: f64 ): f64 {
  return js_exp( x );
}

/**
* Wraps the `exp` from the AssemblyScript standard library.
*/
export function native_exp( x: f64 ): f64 {
	return Math.exp( x );
}
