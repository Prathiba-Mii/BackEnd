class Mammal { //base class /parent class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }

  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal { // child
  constructor(name){
    super(name);
  }

  bark() {
    console.log("wooff..");
  }
}

class Cat extends Mammal { //child
  constructor(name){
    super(name);
  }

  meow() {
    console.log("meow..");
  }
}