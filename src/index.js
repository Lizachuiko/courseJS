/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i],i,array);
  }
  
}


/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  const arrayNew = [];
  for (let i = 0; i < array.length; i++) {
    arrayNew.push(fn(array[i], i, array));
  }
  return arrayNew;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */


// function reduce(array, fn, initial) {
//   const initialExists = typeof initial !== 'undefined' 
//   let previousValue = initialExists ? initial : array[0];

//   for (let i = initialExists ? 0 : 1; i < array.length; i++) {
//     previousValue = fn(previousValue, array[i], i, array);
//   }

//   return previousValue
// }


function reduce(array, fn, initial) {
  let previousValue = initial || array[0];

  for (let i = initial ? 0 : 1; i < array.length; i++) {
    previousValue = fn(previousValue, array[i], i, array);
  }

  return previousValue
}



/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  return Object.keys(obj).map(i => i.toUpperCase())
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
  const newArr = []

  if (to > array.length) {
    to = array.length
  }
  if (to < 0) {
    to = array.length + to
  }
  if (from < 0) {
    from = 0;
  }
  // let f = 0
  // let t = 0

  // if (arguments.length == 1) {
  //   f = 0
  //   t = array.length
  // } else if (arguments.length == 2) {
  //   if (from >= 0) {
  //     f = from
  //   } else {
  //     f = array.length + from
  //   }
  //   t = array.length
  // } else {
  //   if (from >= 0) {
  //     f = from
  //   } else {
  //     f = array.length + from
  //   }
  //   if (to >= 0) {
  //     t = to
  //   } else {
  //     t = array.length + to
  //   }
  // }

  // const normalize = (x) => Math.min(array.length, Math.max(0, x))
  // t = normalize(t)
  // f = normalize(f)

  // for (let i = f; i < t; i++) {
  //   newArr.push(array[i])
  // }
  for (let i = from; i < to; i++) {
    newArr.push(array[i])
  }
  return newArr
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  const handler = {
    set: function(obj, prop, value) {
      obj[prop] = value * value
      return true // case to success
    }
  }

  return new Proxy(obj, handler)
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
