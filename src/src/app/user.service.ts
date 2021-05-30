import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  constructor(private http: HttpClient) {
    this.selectedUser = new User();
    this.users=[];
  }
  getUsers(){
   return this.http.get('http://localhost:3000')
  }
  postUsers(user:User){
   return this.http.post('http://localhost:3000',user)
  }
  putUsers(user:User){
   return this.http.put('http://localhost:3000 ${user._id}',user)
  }
  deleteUser(_id:User){
   return this.http.delete('http://localhost:3000 ${_id}')
  }
}
