﻿/// <reference path='fourslash.ts' />

//@Filename: file.tsx
// @jsx: preserve
// @noLib: true
// @libFiles: react.d.ts,lib.d.ts

//// import React = require('react');
//// declare function ComponentWithTwoAttributes<K,V>(l: {key1: K, value: V}): JSX.Element;

//// function Baz<T,U>(key1: T, value: U) {
////     let a0 = <ComponentWi/*1*/thTwoAttributes k/*2*/ey1={key1} val/*3*/ue={value} />
////     let a1 = <ComponentWithTwoAttributes {...{key1, value: value}} key="Component" />
//// }

verify.quickInfos({
    1: "function ComponentWithTwoAttributes<T, U>(l: {\n    key: T;\n   value: U;\n}): any",
    2: "(attribute) key1: T",
    3: "(attribute) value: U",
});
