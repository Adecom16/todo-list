// main.ts

class Student {
    name: string;
    description: string;
  
    constructor(name: string, description: string) {
      this.name = name;
      this.description = description}
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.description} in google, amazon, ebay.`);
    }
  }
  
  const student = new Student('John', ' a software engineer');
  student.greet();
  
  