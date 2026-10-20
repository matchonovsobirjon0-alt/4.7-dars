"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = identity;
exports.firstElement = firstElement;
exports.logMessage = logMessage;
exports.throwError = throwError;
exports.assert = assert;
// 1. Har qanday qiymatni qabul qilib, o'sha qiymatni qaytaruvchi funksiya
function identity(value) {
    return value;
}
// 2. Arrayning birinchi elementini qaytaruvchi generic funksiya
function firstElement(items) {
    return items[0];
}
// 3. void qaytuvchan funksiya
function logMessage(message) {
    console.log(message);
}
// 5. any va unknown farqi
const anyValue = 123;
const unknownValue = "good morning";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
// 6. never
function throwError(message) {
    throw new Error(message);
}
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
// 8. Namespace
var Store;
(function (Store) {
    function greet(user) {
        return `Good afternoon, ${user.login}!`;
    }
    Store.greet = greet;
})(Store || (Store = {}));
const user = { id: 1, login: "admin" };
console.log(Store.greet(user));
const text = identity("TypeScript");
const firstNumber = firstElement([10, 20, 30]);
const firstString = firstElement(["a", "b", "c"]);
logMessage("Good evening!");
console.log(text, firstNumber, firstString);
