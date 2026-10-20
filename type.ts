//// 1. Har qanday qiymatni qabul qilib, o'sha qiymatni qaytaruvchi funksiya
//function identity<T>(value: T): T {
//  return value;
//}
//
//// 2. Arrayning birinchi elementini qaytaruvchi generic funksiya
//function firstElement<T>(items: T[]): T | undefined {
//  return items[0];
//}
//
//// 3. void qaytuvchan funksiya
//function logMessage(message: string): void {
//  console.log(message);
//}
//
//// 4. Union va Intersection
//type Status = "active" | "inactive";
//
//type User = {
//  id: number;
//  name: string;
//};
//
//type Employee = User & {
//  company: string;
//};
//
//type Maybe<T> = T | null | undefined;
//
//// 5. any va unknown farqi
//const anyValue: any = 123;
//const unknownValue: unknown = "good morning";
//
//if (typeof unknownValue === "string") {
//  console.log(unknownValue.toUpperCase());
//}
//
//// 6. never
//function throwError(message: string): never {
//  throw new Error(message);
//}
//
//function assert(condition: unknown, message: string): asserts condition {
//  if (!condition) {
//    throw new Error(message);
//  }
//}
//
//// 7. Interface
//interface Product {
//  id: number;
//  name: string;
//  price: number;
//}
//
//type ProductDTO = Omit<Product, "id">;
//
//// 8. Namespace
//namespace Store {
//  export interface User {
//    id: number;
//    login: string;
//  }
//
//  export function greet(user: User): string {
//    return `Good afternoon, ${user.login}!`;
//  }
//}
//
//const user: Store.User = { id: 1, login: "admin" };
//console.log(Store.greet(user));
//
//const text = identity<string>("TypeScript");
//const firstNumber = firstElement<number>([10, 20, 30]);
//const firstString = firstElement<string>(["a", "b", "c"]);
//
//logMessage("Good evening!");
//console.log(text, firstNumber, firstString);
//
//export { identity, firstElement, logMessage, throwError, assert };
//\r\n
