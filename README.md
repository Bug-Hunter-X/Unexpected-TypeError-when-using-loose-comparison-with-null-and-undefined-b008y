# Unexpected TypeError in JavaScript due to loose comparison

This repository demonstrates a common JavaScript error that arises from the loose comparison (`==`) between `null` and `undefined`.  The `foo` function intends to handle `null` values gracefully, but fails when passed `undefined` arguments because the strict equality (`===`) should have been used.

## Bug Description
The function `foo` checks if its parameters are strictly equal to `null`, returning `null` if either is.  However, this doesn't catch the case where parameters are `undefined`.  This leads to a `TypeError` when performing addition on an `undefined` value.

## Solution
The solution is to explicitly check for both `null` and `undefined` using either strict equality or a more concise method.