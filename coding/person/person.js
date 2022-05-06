class Person {
  constructor(name) {
    this.name = name;
    this.hobbies = [];
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  introduce() {
    return `My name is ${this.name}`;
  }
}
