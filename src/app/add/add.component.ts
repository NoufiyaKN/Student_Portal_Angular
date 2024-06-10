import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  student:any = {}
  allStudents:any = []

  constructor(private api:AdminAPIService,private router:Router){ }

  ngOnInit(): void {
    this.api.getAllStudentAPI().subscribe((result:any)=>{
      // console.log(result);
      this.allStudents = result
    })
  }

  addStudent(){
    const existingUser = this.allStudents.find((item:any)=>item.id==this.student.id)
    if(existingUser){
      alert("Id aleady exist!!! Use unique id to add student")
    }else{
      this.api.addStudentAPI(this.student).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.name} has successfully added to our DB`)
          this.router.navigateByUrl('/home')
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }
  }

  cancel(){
    this.student = {}
  }
}
