# splitray

  Break an array up into smaller arrays. Useful for organizing jade views server side and slowing down requests ( e.g. var responses = yield [get(..), get(..)] ).

## Example

```js
var splitray = require('splitray');
var result = splitray([1,2,3,4,5], 2) // result = [[1,2], [3,4], [5]]

```

## Installation
  
```
$ npm install splitray
```

## Licence

MIT