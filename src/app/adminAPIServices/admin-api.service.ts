import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  server_url:string = "https://studentportalserver.onrender.com"
  constructor(private http:HttpClient,private router:Router) { }

  authenticateAPI(email:string,password:string){
    return this.http.get(`${this.server_url}/students/101`).subscribe((result:any)=>{
      if(result.email==email && result.password==password){
        sessionStorage.setItem('adminDetails',JSON.stringify(result))
        alert("Login Successfull")
        this.router.navigateByUrl('/home')
      }else{
        alert("Invalid email/password")
      }
    })
  }

  addStudentAPI(student:any){
    return this.http.post(`${this.server_url}/students`,student)
  }

  getAStudentAPI(id:any){
    return this.http.get(`${this.server_url}/students/${id}`)
  }

  getAllStudentAPI(){
    return this.http.get(`${this.server_url}/students`)
  }

  updatestudentAPI(student:any){
    return this.http.put(`${this.server_url}/students/${student.id}`,student)
  }

  removeStudentAPI(id:any){
    return this.http.delete(`${this.server_url}/students/${id}`)
  }

  getAdminDetailsAPI(){
    return this.http.get(`${this.server_url}/students/101`)
  }
  updatedAdminDetails(adminDetails:any){
    return this.http.put(`${this.server_url}/students/101`,adminDetails)
  }
}
