class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setEmail(newEmail) {
      this.email = newEmail;
    }
  
    toString() {
      return `Name: ${this.getFullName()}, Age: ${this.getAge()}, Email: ${this.getEmail()}`;
    }
  }
  
 
  const person1 = new Person("John", "Doe", 30, "john.doe@example.com");
  console.log(person1.toString()); 
  
  person1.setEmail("new.email@example.com");
  console.log(person1.getEmail()); 
  