/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType(variable) {
  return typeof variable;
}

/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
function getDataTypePseudoName(variable) {
  const type = typeof variable;
  if (type === 'boolean' || type === 'number' || type === 'string') {
    return 'primitive';
  } else if (type === 'undefined' || variable === null) {
    return 'primitive-special';
  } else if (type === 'function') {
    return 'object-function';
  } else if (type === 'object' ) {
      if (Array.isArray(variable)) {
        return 'object-array';
      }
    return 'object';
  }
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
function compareByType(a, b) {
  if (a === b) {
    return 1;
  } else if (a == b) {
    return 0;
  }
  return -1;
}

// Numbers

/*
  Напишите функцию, которая принимает 1 аргумент,
  и в случае если аргумент имеет числовой тип увеличивает его на 1
  и возврвщвет результат,
  в любом другом случае возврвщвет -1
*/
function increase(value) {
  if (typeof value === 'number') {
    return value + 1;
  }
  return -1;
}

/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber(value) {
  if (Number.isFinite(value)) {
    return 'safe';
  }
  return 'danger';
}


// Strings

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray(str) {
  if (typeof str === 'string') {
    return str.split(' ');
  }
  return 'Wrong argument type';
}


/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
  if (typeof str === 'string') {
    return str.split(',')[0];
  }
  return 'Wrong argument type';
}

/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {
  if (str.indexOf(symbol) === str.lastIndexOf(symbol)) {
    return str.indexOf(symbol);
  }
  return false;
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  массив в разделитель[опционально],
  и возвращает строку ввиде элементов массива c разделителями если разделитель задан
  или строку разделенную "-" если не задан
*/
function join(array, separator) {
  if (separator) {
    return array.join(separator);
  }
  return array.join('-');
}


/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue(arrA, arrB) {
  return [...arrA, ...arrB];
}


/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
function order(arr) {
  const sortedArr = arr.sort((a, b) => {
    if (a !== b) {
      return b > a ? 1 : -1;
    }
    return 0;
  })
  return sortedArr;
}


/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
function removeNegative(arr) {
  return arr.filter(x => x >= 0);
}

/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
function without(arrA, arrB) {
  return arrA.filter(x => !arrB.includes(x));
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение математической операции с двумя
  операндами (поддерживаются 4 базовых оператора + - / *).
  Функция вычисляет выражение и возвращает число либо NaN.
  '12/6' => 2
*/
function calcExpression(expression) {
  try {
    return eval(expression);
  }
  catch (error) {
    return NaN;
  }
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/
function calcComparison(expression) {
  try {
    let newExp = expression;
    if (expression.indexOf('=') !== -1 && expression.indexOf('<') === -1 && expression.indexOf('>') === -1) {      
      if (expression.indexOf('=') === expression.lastIndexOf('=')) {
        newExp = expression.replace('=', '===');
      } else {
        newExp = expression.replace('=', '==');
      }
    }
    return eval(newExp);
  } catch (error) {
    throw new Error(error);
  }
}

/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
function evalKey(obj, expression) {
  let result = obj;
  const arrExp = expression.split('.');
  if (arrExp.length === 1) {
    throw new Error();
  }
  for (const el of arrExp) {
    if (el) {
      result = result[el];
    }
  }
  if (result === undefined) {
    throw new Error();
  }
  return result;
}

export default {
  getDataType,
  getDataTypePseudoName,
  compareByType,
  increase,
  testForSafeNumber,
  stringToArray,
  getStringPart,
  isSingleSymbolMatch,
  join,
  glue,
  order,
  removeNegative,
  without,
  calcExpression,
  calcComparison,
  evalKey,
};
