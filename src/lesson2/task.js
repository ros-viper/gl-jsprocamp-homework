/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
export function sum(a, b) {
    return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
export function sumAll(...args) {
    return args.reduce((args, x) => args + x);
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow(x, n) {
    return Math.pow(x, n);
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random(from, to) {
    return Math.floor(Math.random() * to) + from;
}

export default {
  sum,
  sumAll,
  pow,
  random,
};
