# not-available

Converts empty object,empty array, empty string,NaN,null or undefined into the string \"N/A\" else return the input as-is.

```js
const NA = require("not-available")
console.log('true => ' + NA(true)) // true
console.log('false => ' + NA(false)) // false
console.log('Empty object => ' + NA({})) // N/A
console.log('Empty Array => ' + NA([])) // N/A
console.log('0 => ' + NA(0)) // 0
console.log('NaN => ' + NA(NaN)) // N/A
console.log('Empty string => ' + NA('')) // N/A
console.log('undefined => ' + NA(undefined)) // N/A
console.log('null => ' + NA(null)) // N/A
console.log('Object => ', NA({a:'b'})) // {a:'b'}
console.log('Array => ' + NA(['a'])) // a
```

