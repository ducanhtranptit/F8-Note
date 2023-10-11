class User {
  //dinh nghia cac thuoc tinh
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  //dinh nghia cac phuong thuc

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

const user = new User("bimbeo", "asdf@email");
console.log(user);

class Auth extends User {
  constructor(name, email) {
    super(name, email);
  }
}
