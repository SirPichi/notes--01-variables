/*Document.write() is a javascript method that is used to displaywhatever you place inside of its round braces, Use document.write() to display Javascript content on HTML/PHP pages. */
document.write('Hello World!');

/* Variables are used bt programming languages to hold data for reported and later use */
var myFirstVariable = 25;
document.write('<br>' + myFirstVariable);

/* Javascript, like all programming languages, is capable of performing very complex and very simple math. But like all programming languages, you have to be very explicit about what you want the computer to do. Below, we will create two variavles,add them together then display them on the screen. */
var firstNumber = 48120;
var secondNumber = 21300;
var sumOfNumers = firstNumber + secondNumber;
document.write('<br>' + sumOfNumers);

/*Below, we will subtract the above firstNumber and secondNumber from each other and display it on the screen */
var subtractNumbers = firstNumber - secondNumber;
document.write('<br>' + subtractNumbers);

/* Data types are different forms of data that are recognized by computers and operated on using programming languages. The most basic datatype is a number. */
var numberDataType = 58;

/* The second most basic datatypeis a string. A string in other words, is a letter, or a sentence, a paragraph, or anything that is not a true number that can be operated on by math operations. Strings are always placed inside of quotes. */

var stringDataType = 'This is a string.';
var alsoStringDataType = '565';
var testNumber = firstNumber + alsoStringDataType;

document.write('<br>' + testNumber)

// This is a single line comment. It's meant for very notes.

/* This is a multi line comment. It is meant for longer comments thta may be paragraphs long. */