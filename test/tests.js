try {
  var splitray = require('splitray');
} catch (e) {
  var splitray = require('..');
}

var assert = require('assert');

describe('splitray', function(){
  it('should return an emptry array if initial array is empty', function () {
    assert(splitray([], 5))
  })
  it('should return an 5 arrays', function () {
    assert((splitray([1,2,3,4,5,6,7,8,9,10], 2)).length == 5)
  })
  it('should return an 6 arrays', function () {
    assert((splitray([1,2,3,4,5,6,7,8,9,10,11], 2)).length == 6)
  })
});