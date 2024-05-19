/**
 * @author Duong Dinh ANh Khoi - CE171496 - SE1717
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Duong Dinh Anh Khoi", 21);
person.sayHello();
