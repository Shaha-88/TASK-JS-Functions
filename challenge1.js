/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
let name="shaha";
function printName(name) {;
  console.log('${name}');
}
printName(name);

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
let age =35;
function printAge(age) {;
  console.log('${age}');
}
printAge(age);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
const name ="shaha";
const lang ="eng";
function printHello(name,lang) {;
    if(lang == en){console.log(Hello ${name})};
    else if (lang == es){console.log(Hola ${name});
    else if (lang ==fr){console.log(Bonjour ${name})};
    else if(lang==tr){console.log(Merhaba ${name})};   
}
printHello(name,lang);
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
const number1 = 30;
const number2 = 50;
function printMax(number1,number2) {;
if(number1 > number2){;
return number1;
} else {return number2};
};

printMax(number1,number2);
