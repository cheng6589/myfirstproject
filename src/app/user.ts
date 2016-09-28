export class User{
    name:string;
    age:number;
    weight:number;
    height:number;
    password:string;

    constructor(name:string, age:number, password:string, height:number, weight:number){
        this.name = name;
        this.age = age;
        this.password = password;
        this.height = height;
        this.weight = weight;
    }

    //methods start here 
    isOld():boolean {
        if(this.age >= 50)
            return true;
        else
            return false;
    }

    getBMI():number{
        return this.weight / ((this.height/100) *(this.height/100));
    }

    isHealthy():boolean{
        if(this.getBMI() >=18.5 && this.getBMI() <= 24.9)
            return true;
        return false;

    }
}