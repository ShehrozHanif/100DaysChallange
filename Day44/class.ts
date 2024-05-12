// Question 131: Create two modules, one that export a class, and another that import the class and creates an instance.
export class student{
    name:string
    age:number
    city:string
    RollNo:number

    constructor(n:string, a:number, c:string, r:number){
        this.name =n
        this.age = a
        this.city =c
        this.RollNo =r
    }
    stdfunc(){
        console.log(`Student name is ${this.name} age is ${this.age} and city is ${this.city} and roll no is ${this.RollNo}`)
    }
}
