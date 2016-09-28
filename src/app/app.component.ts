import { Component } from '@angular/core';
import { User } from './user'

const USERS = [
  new User("Ali",30,"password", 180, 80),
  new User("Abu", 45, "password", 169, 80),
  new User("Ahmad", 65, "password", 159, 80),
  new User("Akbar", 75, "password", 170, 80),
  new User("Abar", 15, "password", 179, 80),
]
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Welcome to your first trial"
  users:Array<User>
  selectedUser:User

  constructor(){
    //this.selectedUser = new User("Jason", 16, "password", 160, 95);
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  onCheckAge(){
    if(this.selectedUser.isOld())
      alert("You are too old to be here.")
    else
      alert("You are young.")
  }

  getBMI(){
    alert("Your BMI is : " + this.selectedUser.getBMI())
  }

  deleteUser(index:number){
    this.users.splice(index, 1);
  }

  addUser(){
    let tempUser:any = {};
    tempUser.name = prompt("name")
    tempUser.password = prompt("password")
    tempUser.age = Number(prompt("age"))
    tempUser.weight = Number(prompt("weight"))
    tempUser.height = Number(prompt("height"))

    this.users.push(new User(
      tempUser.name,
      tempUser.age,
      tempUser.password,
      tempUser.height,
      tempUser.weight
    ))

    //Replace the old array of users
    /*
    let tempUsers:Array<User>;
    tempUsers = [];
    this.users.forEach(item => {
      tempUsers.push(item)
    })
    this.users = tempUsers
    console.log(this.users)
    */
  }
}
