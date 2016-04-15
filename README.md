# object-at

> Get object's property according to the path.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/object-at/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/object-at/master.svg?style=flat-square)](https://travis-ci.org/gearcase/object-at)
[![coverage:?](https://img.shields.io/coveralls/gearcase/object-at/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/object-at)


## Install

```
$ npm install --save object-at 
```

## Usage

> For more use-cases see the [tests](https://github.com/gearcase/object-at/blob/master/test/spec/index.js)

```js
var at     = require('object-at');
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

at(object, 'a[0].b.c'); // => 3
at(object, 'a[1]');     // => 4
at(['a', 'b', 'c'], 2); // => 'c'

at();                       // => undefined
at(['a', 'b', 'c']);        // => undefined
at(['a', 'b', 'c'], 5);     // => undefined
at(['a', 'b', 'c'], '1.2'); // => undefined
```


## Related

- [object-has](https://github.com/gearcase/object-has) - Checks if path is a direct property of object.
- [object-set](https://github.com/gearcase/object-set) - Sets the value at path of object.
- [object-unset](https://github.com/gearcase/object-unset) - Removes the property at path of object.
- [to-path](https://github.com/gearcase/to-path) - Converts string to a property path array. 



## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/gearcase/object-at/issues/new).
