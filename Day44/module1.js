// Question 131: Create two modules, one that export a class, and another that import the class and creates an instance.
export class Myclass {
    message;
    constructor(message) {
        this.message = message;
    }
    showMessage() {
        console.log(this.message);
    }
}
