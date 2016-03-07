/**
 * Expose 'splitray'
 */

module.exports = splitray

/**
 * Clone and split array into smaller arrays on length specified
 * @param  {Array}  array   array of length n
 * @return {Array}
 */

function splitray(array, chuncksize) {
  var clone = array.slice(0);
  var temp = [];
  while(clone.length > 0) {
    temp.push(clone.splice(0, chuncksize))
  }
  return temp;
}
