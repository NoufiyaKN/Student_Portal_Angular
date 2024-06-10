import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allStudents:any[] = []
  searchKey:string=""

  constructor(private api:AdminAPIService,private router:Router){}

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(){
    this.api.getAllStudentAPI().subscribe((result:any)=>{
      this.allStudents = result.filter((student:any)=>student.id!='101')
      console.log(this.allStudents);
    })
  }

  deleteStudent(id:any){
    this.api.removeStudentAPI(id).subscribe((result:any)=>{
      this.getAllStudents()
    })
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl('')
  }
}
