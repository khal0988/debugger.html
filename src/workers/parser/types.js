/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

export type AstPosition = { line: number, column: number };

export type AstLocation = { end: AstPosition, start: AstPosition };

export type Scope = {
  location: AstLocation,
  parent: Scope,
  bindings: Object[]
};

export type { SymbolDeclaration, SymbolDeclarations } from "./getSymbols";
