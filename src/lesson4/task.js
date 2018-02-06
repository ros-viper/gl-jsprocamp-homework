/*
  Write a function that creates custom set object. Function
  accepts single optional parameter (array) do define initial
  set content.
  Set should have add(), has(), delete(), forEach(), clear() methods
  and size property. Should not use es6 objects Set, WeakSet,
  but work in similar way. Set should preserve addition order
  in forEach() method.
  mySet = createSet(['a', 'b', 'c'])
*/
export function createSet(arr = []) {
  const setPrototype = {
    get size() {
      return this.length || 0;
    },
    add(val) {
      if (!Array.prototype.includes.call(this, val)) {
        Array.prototype.push.call(this, val);
      }
    },
    has(val) {
      return Array.prototype.includes.call(this, val);
    },
    delete(val) {
      if (Array.prototype.includes.call(this, val)) {
        Array.prototype.splice.call(this, (Array.prototype.indexOf.call(this, val)), 1);
        return true;
      }
      return false;
    },
    forEach(fn) {
      return Array.prototype.forEach.call(this, element => fn(element));
    },
    clear() {
      Array.prototype.splice.call(this, 0);
    }
  }
  const arrSet = [];
  if (arr && Array.isArray(arr)) {
    arr.forEach(element => {
      if (!arrSet.includes(element)) {
        arrSet.push(element);
      }
    });
    Object.setPrototypeOf(arrSet, setPrototype)
  }
  return arrSet;
}

/*
  Write a function that creates custom map object. Function
  accepts single optional parameter (array) do define initial
  map content.
  Map should have set(), get(), has(), delete(), forEach(), clear()
  methods and size property. Should not use es6 objects Map, WeakMap,
  but work in similar way. Map should preserve addition order
  in forEach() method.
  myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
*/
export function createMap(arr) {

}

export default {
  createSet,
  createMap
};
