class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  canVote() {
    return this.age >= 18;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`;
  }

  updateConfig() {
    return "Config updated";
  }
}

// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
user.canVote(); // false
user.getFullName(); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
admin.canVote(); // true
admin.getFullName(); // "Alex Blue [admin]"
admin.updateConfig(); // "Config updated"
