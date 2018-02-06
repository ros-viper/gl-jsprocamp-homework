/*
  Write a function, that has 2 required parameters, and any amount of optional parameters.
  Function should return a number - amount of optional parameters that were passed into function.
  Hint: you are allowed to modify both function definition and function body.
*/
export function countOptional(param1, param2, ...rest) {
  return rest.length || 0;
}

/*
  Write your implementation of native Function.prototype.bind method
*/
export function bindContext(fn, context, ...rest) {
  return function() {
    return fn.apply(context, rest);
  }
}
// export function bindContext(fn, context) {
//   const obj = context;
//   const slicedArgs = Array.prototype.slice.call(arguments, 2)
//   obj.func = fn;
//   return function() {
//     return obj.func(slicedArgs);
//   }
// }
// export function bindContext(fn, context, ...rest) {
//   const obj = context;
//   // const slicedArgs = Array.from(rest).slice(2);
//   obj.func = fn;
//   return function() {
//     return obj.func(rest);
//   }
// }


/*
  Write function that accepts 1 parameter - object. It should add to this object a log interface so as:
  const named = {name: 'Allen'}
  addLogCapability(named);
  named.log() // Log message #5: my name is Allen

  const unnamed = {msg: 'some text'}
  addLogCapability(unnamed);
  unnamed.log() // Log message #8: I dont have name
  unnamed.log() // Log message #9: I dont have name
  unnamed.log() // Log message #10: I dont have name

  Take to account, that you should track log call index starting from 1
*/
export function addLogCapability(object) {
  let counter = 0;
  const log = function() {
    if (this.name) {
      return `Log message #${counter +=1}: my name is ${this.name}`;
    } else {
      return `Log message #${counter +=1}: I dont have name`;
    }
  }
  object.log = log.bind(object);
}

/*
  Write a function that creates custom topic logger:
  myLogger = logger('My Topic')
  myLogger('first message'); //=> My Topic: first message
*/
export function logger(topic) {
  function log(context, theme) {
    return(`${context}: ${theme}`);
  }
  return log.bind(null, topic);
}

/*
  Implement left to right compose function
*/
export function compose(...rest) {
  return function(value) {
    return rest.reduce((func1, func2) => (func2(func1)), value);
  }
}


/*
  Implement function that can turn function into partial application
  function sum(a, b) {
    return a+b;
  }

  const partialSum = partial(sum);
  const sumWith4 = partialSum(4);
  sumWith4(5) // 9
*/
export function partial(fn) {
  return function(...rest) {
    return fn.bind(null,...rest);
  }
}

export default {
  countOptional,
  bindContext,
  addLogCapability,
  logger,
  compose,
  partial
};
