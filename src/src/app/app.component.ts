import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  constructor(public userService:UserService){}
ngOnInit(){
  this.getUsers();
}

  getUsers(){
    this.userService.getUsers()
    .subscribe((res)=>{
      this.userService.users = res as User[];
    })
  }
  postUsers(form:NgForm){
    if(form.value._id){
      this.userService.postUsers(form.value)
      .subscribe((res)=>{
        this.getUsers()
        this.userService.selectedUser = new User();
      })
      
    }else
    {
      this.userService.putUsers(form.value)
    .subscribe((res)=>{
      this.getUsers()
      this.userService.selectedUser =new User()
    })
      
    }
  }
  putUser(user:User){
    this.userService.putUsers(user)
    .subscribe((res)=>{
      this.getUsers()
      this.userService.selectedUser =new User()
    })
  }
  editUser(user:User){
    this.userService.selectedUser =user;
  }
  deleteUser(_id:any){
    this.userService.deleteUser(_id)
    .subscribe((res)=>{
      this.getUsers()
      this.userService.selectedUser = new User()
    })

  }

}
