// Task 1/2

// const invoice = 100; 
// const stock = 100;

// // Write code under this line
// const message = stock >= invoice ? `Заказ оформлен, с вами свяжется менеджер` : `На складе недостаточно товаров!`;

// //console.log(message);

// //если invoice равен 100
// // то значение message будет равно
// // 'Заказ оформлен, с вами свяжется менеджер'

// //если invoice равен 50
// // то значение message будет равно
// // 'Заказ оформлен, с вами свяжется менеджер'  

// //если invoice равен 150
// // то значение message будет равно
// // 'На складе недостаточно товаров!'




// Task 1/3

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if(userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED
// } else if(userPassword === null) {
//   message = CANCELED_BY_USER
// } else {
//   message = ACCESS_DENIED
// };
  

// // console.log(message);

// //если userPassword равно 'jqueryismyjam' 
// // то значение message будет равно
// // 'Добро пожаловать!'

// //если userPassword равно  null 
// // то значение message будет равно  
// // 'Отменено пользователем!'

// //если userPassword равно '123' 
// // то значение message будет равно
// // 'Доступ запрещен, неверный пароль!'




// Task 1/4

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
//   if(credits > totalPrice) {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
//   } else if(orderPieces = null) {
//     message = CANCELED_BY_USER
//   } else {
//     message = ACCESS_DENIED
//   };

// // console.log(message);

// //если orderPieces равно 4
// // то значение message будет равно
// // 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

// //если orderPieces равно null
// // то значение message будет равно
// // 'Отменено пользователем!'

// //если orderPieces равно 10
// // то значение message будет равно
// // 'Недостаточно средств на счету!'




// Task 1/5

// const countryName = "КитаЙ";

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//   // Write code under this line
//     case CHINA:
//       price = 100;
//       break;
      
//     case AUSTRALIA:
//       price = 170;
//       break;
      
//     case INDIA:
//       price = 80;
//       break;
      
//     case JAMAICA:
//       price = 120;
//       break;
      
//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) { // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// // console.log(message);

// //если countryName равно "КитаЙ"
// // то значение message будет равно
// // 'Доставка в Китай будет стоить 100 кредитов'

// //если countryName равно null
// // то значение message будет равно
// // 'Отменено пользователем!'

// //если countryName равно "Чили"
// // то значение message будет равно
// // 'В выбранную страну доставка недоступна.'




// Task 2/3

// function findLongestWord (string = "") {
//     // Write code under this line
//     let array = string.split(' ');
//     let longestWord = '';
//     for(const word of array) {
//       if(word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
    
//     return longestWord;
//   }
  
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//    //'jumped'
  
//   console.log(findLongestWord('Google do a roll'));
//    //'Google'
  
//   console.log(findLongestWord('May the force be with you'));
//   // 'force'




// Task 2/4

// function formatString (string, maxLength = 40) {
//     const array = string.split('');
//     let shortLangth = ``;
//     // let newString = string.split(` `);
//     if (array.length > maxLength) {
//       shortLangth = string.slice(0,maxLength) + '...';
//     } else {
//       shortLangth = string
//     }
//     return shortLangth;
//   }
  
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//    'Curabitur ligula sapien, tincidunt non.'
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//    'Vestibulum facilisis, purus nec pulvinar...'
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
//    'Vestibulum facilisis, purus ne...'





// Task 2/5

// function checkForSpam (str) { 
//     'use strict';
//     // Write code under this line
//     const string = str.toLowerCase();
    
//     const isIncludeSpam = 
//           string.includes('spam') || string.includes('sale') ? true : false;
//     return isIncludeSpam;
//   }
  
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true




// Task 2/6

// function mapArray(array) {
//     'use strict';
//     let numbers = new Array(array.length);
//     // console.log(numbers);
//     for(let i = 0; i < array.length; i += 1) {
//       array[i] *= 10;
//       numbers = array;
//     }
//     return numbers;
//   }

// console.log(mapArray([-2, 0, 2]));
//  [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
//  [-25, 0, 25]



// Task2/7


// function filterArray(array) {
//     'use strict';
//     const numbers = [];
//     for(let i = 0; i < array.length; i += 1) {
//       // Write code under this line
//       if(Number.isFinite(array[i])) {
//          numbers.push(array[i]);
//     }
//   }
//     return numbers;
  
// }

// console.log(filterArray([-2, 0, 2]));
//  [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
//  [1]

// console.log(filterArray([0, -0, 100, '100']));
//  [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
//  [1]

// console.log(filterArray([{}, () => {}, 2]));
//  [2]



// Task 2/8

// function reduceArray(array) {
//     'use strict';
//     let total = 0;
//     let i = 0;
//     for(i = 0; i < array.length; i += 1) {
//       total = array[0] + array[1] + array[2]
//     }
//     // Write code under this line
     
//     return total;
//   };
  
//   console.log(reduceArray([1, 2, 3]));
//    6
  
//   console.log(reduceArray([-2, 0, 2]));
//    0
  
//   console.log(reduceArray([1, 2, 2.5]));
//    5.5



// Task 2/9

// function isLoginValid (login, min = 4, max = 16) {
//     // Write code under this line
//     const loginLength = login.length;
//     return loginLength >= min && loginLength <= max ? true : false;
//   }
  
//   function isLoginUnique  (allLogins, login) {
//     'use strict';
//     // Write code under this line
//     return !allLogins.includes(login);
//   }
  
//   function addLogin (allLogins, login) {
//     'use strict';
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;
//     // Write code under this line    
//     console.log(isLoginValid(login));
//     if (!isLoginValid(login)) {
//       message = ERROR;
//       return message;
//     }
//     console.log(isLoginUnique(login));
//     if (!isLoginUnique(allLogins, login)) {
//       message = REFUSAL;
//       return message;
//     }
//     allLogins.push(login);
//     message = SUCCESS;
//     return message;
  
//   }
  
//   const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
  
//    console.log(addLogin(logins, 'Ajax')); 
//    'Логин успешно добавлен!'
  
//    console.log(addLogin(logins, 'robotGoogles')); 
//    'Такой логин уже используется!'
  
//    console.log(addLogin(logins, 'Zod'));
//    'Ошибка! Логин должен быть от 4 до 16 символов'
  
//    console.log(addLogin(logins, 'jqueryisextremelyfast')); 
//    'Ошибка! Логин должен быть от 4 до 16 символов'



// Task 3/1


// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };
 
// //Write code under this line  
//  user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user['premium'] = false;
 
// const keys = Object.keys(user);
// // Write code under this line
//  for(const key of keys) {
//    message += `${key} : ${user[key]}\n`
//  }
 
// console.log(message); 




// Task 3/2 

// const countProps = function(obj) {
//     'use strict';
//   // Write code under this line
//   const keys = Object.keys(obj);
//   return keys.length
// };

// console.log(countProps({})); // 0

// console.log(countProps({a:1, b:1})); // 2

// console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5




// Task 3/3

// const findBestEmployee = function (employees) {
//     'use strict';
//     // Write code under this line
//     let best = 0;
//     let key = '';
//     const entries = Object.entries(employees);
    
//     for(const entry of entries) {
//       if (entry[1] > best) {
//         best = entry[1];
//         key = entry[0];
//       }
//     }
    
//     return key;
//   };
  
//   // Объекты и ожидаемый результат
//   const developers = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }; 
//   //console.log(findBestEmployee(developers)); 
//   // 'lorence'
  
//   const supports = {
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }; 
//   //console.log(findBestEmployee(supports)); 
//   // 'mango'
  
//   const sellers = {
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }
//   //console.log(findBestEmployee(sellers)); 
//   // 'lux' 




// Task 3/4

// const countTotalSalary = function(employees) {
//     'use strict';
//     // Write code under this line
//     let totalSalary = 0;
//     const values = Object.values(employees);
    
//     for(const value of values) {
//       totalSalary += value;
//     }
    
//     return totalSalary;
//   };
  
//   // Объекты и ожидаемый результат
//   const developers = {
//       mango: 300,
//       poly: 250,
//       alfred: 450,
//   };
//   //console.log(countTotalSalary(developers));
//   // 1000
  
//   const supports = {
//     kiwi: 200,
//     lux: 150,
//     chelsy: 150,
//   }
//   //console.log(countTotalSalary(supports));
//   // 500




// Task 3/5

// function getAllPropValues (array, prop) {
//     'use strict';
//     // Write code under this line 
//     const values = [];
    
//     for(const element of array) {
//       if(prop in element) {
//         values.push(element[prop]);
//       }
//     }
//     return values;
//   }
  
//   // Объекты и ожидаемый результат
//   const products = [
//       { name: 'Радар', price: 1300, quantity: 4 },
//       { name: 'Радар', price: 1280, quantity: 2 },
//       { name: 'Радар', price: 1320, quantity: 1 },
//       { name: 'Сканер', price: 2700, quantity: 1 },
//       { name: 'Сканер', price: 2500, quantity: 3 },
//       { name: 'Дроид', price: 400, quantity: 7 },
//       { name: 'Захват', price: 1200, quantity: 2 },
//   ]; 
  
//   //console.log(getAllPropValues(products, 'name'));
//   // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
//   //console.log(getAllPropValues(products, 'quantity'));
//   // [4, 2, 1, 1, 3, 7, 2]
  
//   //console.log(getAllPropValues(products, 'category'));
//   //  []




// Task 3/6

// function calculateTotalPrice (array, prop) {
//     'use strict';
//     // Write code under this line
//     let totalPrice = 0;
    
//     for(const element of array) {
//       if(element.name === prop) {
//         totalPrice += element.price * element.quantity;
//       }
//     }
//     return totalPrice;
//   }
  
//   // Объекты и ожидаемый результат
//   const products = [
//       { name: 'Радар', price: 1300, quantity: 4 },
//       { name: 'Радар', price: 1280, quantity: 2 },
//       { name: 'Радар', price: 1320, quantity: 1 },
//       { name: 'Сканер', price: 2700, quantity: 1 },
//       { name: 'Сканер', price: 2500, quantity: 3 },
//       { name: 'Дроид', price: 400, quantity: 7 },
//       { name: 'Захват', price: 1200, quantity: 2 }
//   ]; 
  
//   //console.log(calculateTotalPrice(products, 'Радар'));  
//   // 9080
  
//   //console.log(calculateTotalPrice(products, 'Сканер')); 
//   // 10200
  
//   //console.log(calculateTotalPrice(products, 'Захват'));
//   // 2400
  
//   //console.log(calculateTotalPrice(products, 'Дроид')); 
//   // 2800




// Task 4/1

// const addIndex = (element, index) => element + index;
// // Write code under this line
// const subIndex = (element, index) => element - index;
  
// function mapArray(array, cb) {
//   'use strict';
// // Write code under this line
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]




// Task 4/2

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if(cb(element, index, array)) {
//       numbers.push(element)
//     }
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];

// //console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// //console.log(filterArray(arr, isEven));
// // [2, 4, 2]




// Task4/3

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr  = [1,2,3,4,5];

// //console.log(reduceArray(arr, add)); // 15
// //console.log(reduceArray(arr, add, 10)); // 25

// //console.log(reduceArray(arr, mult)); // 120
// //console.log(reduceArray(arr, mult, 10)); // 1200

// //console.log(reduceArray(arr, sub)); // -13
// //console.log(reduceArray(arr, sub, 10)); // -5




// Task 4/4

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value; // Write code in this line
//     },
//     showOrders() {
//       return this.orders; // Write code in this line
//     },
//     addOrder(cost, order) {
//       this.balance -= cost; // Write code in this line
//       this.orders.push(order); // Write code in this line
//     },
//   };
//   const copyAccount =  Object.assign({},account);
//   copyAccount.orders = [...account.orders];
//   // копируем для автотестов ссылочные типы
  
//   /*
//   account.changeDiscount(0.15);
//   //console.log(account.discount); // 0.15
  
//   //console.log(account.showOrders()); 
//   // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, 'order-4');
//   //console.log(account.balance); // 19000
  
//   //console.log(account.showOrders());
//   // ['order-1', 'order-2', 'order-3', 'order-4']
//   */




// Task 4/5

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       this.items.push(itemName);
//       return `Adding ${itemName} to inventory`;
//     },
//     remove(itemName) {
//       this.items = this.items.filter(item => item !== itemName);
//       return `Removing ${itemName} from inventory`;
//     },
//   };
  
//   const invokeInventoryAction = function(itemName, action) {
//     const act =  action(itemName);
//     const msg =  `Invoking action on ${itemName}`;
//     return {act, msg};
//   };
  
//   const invokeAdd = invokeInventoryAction(
//     'Medkit',
//     inventory.add.bind(inventory)  // Write code in this line
//   );
//   const arrayAdd = [...inventory.items];
//   /* 
//   //console.log(invokeAdd);
//   //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }
  
//   //console.log(arrayAdd);
//   // ['Knife', 'Gas mask', 'Medkit']
//   */
  
//   const invokeRemove = invokeInventoryAction(
//     'Gas mask',
//     inventory.remove.bind(inventory)  // Write code in this line
//   );
  
//   const arrayRemove = [...inventory.items];
  
//   /* 
//   //console.log(invokeRemove);
//   //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }
  
//   //console.log(arrayRemove);
//   // ['Knife', 'Medkit']
//   */




// Task 5/1

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
//   };
  
//   Account.prototype.getInfo = function() {
//     return `login : ${this.login}, email: ${this.email}`;
//   };
  
//   const mango = new Account( 'Mangozedog', 'mango@dog.woof');
//   const poly = new Account( 'Poly', 'poly@mail.com'); 
  
//   mango.getInfo();
//   poly.getInfo();
  
  
//   //console.log(typeof Account.prototype.getInfo);
//   // 'function'
  
//   // const mango = new Account( 'Mangozedog', 'mango@dog.woof');
//   //console.log(mango.getInfo()); 
//   // 'login : Mangozedog, email: mango@dog.woof'
  
//   // const poly = new Account( 'Poly', 'poly@mail.com');
//   //console.log(poly.getInfo());
//   // 'login : Poly, email: poly@mail.com'




// Task 5/2

// class User {
//     constructor(name, age, followers) {
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//     }
//     getInfo() {
//       return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//     }
//   }
  
//   // console.log(typeof User);
//   // 'function'
  
//   // const mango = new User('Mango', 2, 20);
//   // console.log(mango.getInfo()); 
//   // 'User Mango is 2 years old and has 20 followers'
  
//   // console.log(typeof mango.getInfo); 
//   // 'function'  
  
//   // const poly = new User( 'Poly', 3, 17);
//   // console.log(poly.getInfo());
//   // 'User Poly is 3 years old and has 17 followers'




// Task 5/3

// class Storage {
//     constructor(items) {
//       this.items = items;
//     }
//     getItems() {
//       return this.items;
//     }
//     addItem(item) {
//       return this.items.push(item);
//     }
//     removeItem(item) {
//         for (let i = 0; i< this.items.length; i+= 1) {
//           if (item === this.items[i]) {
//           this.items.splice(i, 1)}
//         }
//         return this.items;
//         }
//   }
  
//   // console.log(typeof Storage);
//   // 'function'
  
//   const goods = [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор'
//   ];
  
//   // const storage = new Storage(goods);
  
//   // console.log(storage.getItems());
//   /* [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор'
//   ] */
  
//   // storage.addItem('Дроид');
//   // console.log(storage.getItems());
//   /* [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//     'Дроид'
//   ] */
  
//   // storage.removeItem('Пролонгер');
//   // console.log(storage.getItems());
//   /* [
//     'Нанитоиды',
//     'Железные жупи',
//     'Антигравитатор',
//     'Дроид'
//   ] */




// Task 5/4

// class StringBuilder {
//     constructor(value) {
//       this._value = value;
//     }
    
//     get value () {
//       return this._value;
//     }
    
//     append(str) {
//       return (this._value += str);
//     }
    
//     prepend(str) {
//       return (this._value = str + this._value);
//     }
    
//     pad = function (str) {
//           return (str + this.append(str)) + (this.prepend(str) + str);
//   }
// }
  
// //    console.log(typeof StringBuilder);
// //   // 'function'
  
  
// //    const builder = new StringBuilder('.');
  
// //    builder.append('^');
// //    console.log(builder.value); // '.^'
  
// //    builder.prepend('^');
// //    console.log(builder.value); // '^.^'
  
// //    builder.pad('=');
// //    console.log(builder.value); // '=^.^='




// Task 5/5

// class Car {
//     // Write code under this line
//       static getSpecs(car){
//         return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//         }
//         constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0} ){
//             this.speed = speed,
//             this._price = price,
//             this.maxSpeed = maxSpeed,
//             this.isOn = false,
//             this.distance = distance
//         }
//         get price() {
//             return this._price;
//         }
//         set price(value) {
//             this._price = value;
//         }
//         turnOn() {
//            this.isOn = true;
//         }
//         turnOff() {
//            this.isOn = false;
//             this.speed = 0;
//         }
//         accelerate(value) {
//            if (value + this.speed < this.maxSpeed) {
//                this.speed += value;
//            } else { this.speed = this.maxSpeed
//                   }
//         }
//         decelerate(value) {
//             if (this.speed - value > 0) {
//                this.speed -= value;
//             } else { this.speed = 0
//                    }
//         }
//         drive(hours) {
//             if (this.isOn) {
//                (this.distance += hours * this.speed);
//             }
//         }
//    }
    
//    const mustang = new Car({ maxSpeed: 200, price: 2000 });
//    mustang.turnOn();
//    mustang.accelerate(50);
//    mustang.drive(2);
   
//    // console.log(Car.getSpecs(mustang));
//    // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
//    mustang.decelerate(20);
//    mustang.drive(1);
//    mustang.turnOff();
   
//    // console.log(Car.getSpecs(mustang));
//    // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
//    // console.log(mustang.price); // 2000
//    mustang.price = 4000;
//    // console.log(mustang.price); // 4000




// Task 6/1

// const getUserNames = (array) => array.map(({name}) => name);

//  console.log(getUserNames(users));

// /* [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ] */




// Task 6/2

// const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor})=>eyeColor===color);

//  console.log(getUsersWithEyeColor(users, 'blue'));
// /* [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   }
// ] */




// Task 6/3

// const getUsersWithGender = (array, genderGroup) => array.filter(({gender}) => gender === genderGroup).map(({name}) => name);

// // console.log(getUsersWithGender(users, 'male'));

// /* [
//   "Moore Hensley",
//   "Ross Vazquez",  
//   "Carey Barr",  
//   "Blackburn Dotson"  
// ] */




// Task 6/4

// const getInactiveUsers=(array, isActive)=>array.filter(({isActive})=>isActive===!true);

// // console.log(getInactiveUsers(users));

// /* [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   }     
// ]; */




// Task 6/5

// const getUserWithEmail = (array, mail) => array.find(({email}) => email===mail);

// // console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// /* {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
// } */

// // console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

// /* {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
// } */




// Task 6/6

// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => max >= age && age >= min)
//  .map(({name, email}) => ({name, email}));  

// // console.log(getUsersWithAge(users, 20, 30));
// /* [
//     { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
//     { name: 'Elma Head', email: 'elmahead@omatom.com' },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com' }
// ] */

// // console.log(getUsersWithAge(users, 30, 40));
// /* [
//     { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
//     { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
//     { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
//     { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
// ] */




// Task 6/7

// const calculateTotalBalance = (array) => array.reduce((user, {balance}) => user + balance, 0);

// console.log(calculateTotalBalance(users)); 
// // 20916




// Task 6/8

// const getUsersWithFriend = (array, friendName) => array.filter(({friends}) =>
//     friends.includes(friendName)).map(({name}) => name);

// // console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// // console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]




// Task 6/9

// const getNamesSortedByFriendsCount = (array) => [...array].sort((a, b) => 
// a.friends.length - b.friends.length).map(({name}) => name);

// // console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 
// // 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]




// Task 6/10

// const getSortedUniqueSkills = (array) => array.reduce((acc, {skills}) => 
// [...acc, ...skills], []).filter(( item, pos, array) => array.indexOf(item) === pos).sort();

// // console.log(getSortedUniqueSkills(users));
// /* [ 'adipisicing', 'amet',
//  'anim', 'commodo',
//  'culpa', 'elit',
//  'ex', 'ipsum',
//  'irure', 'laborum',
//  'lorem', 'mollit',
//  'non', 'nostrud',
//  'nulla', 'proident',
//  'tempor', 'velit',
//  'veniam' ]; */