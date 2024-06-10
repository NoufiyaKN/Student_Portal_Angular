import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  student:any = {}

  constructor(private api:AdminAPIService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      console.log(id);
      this.getStudentDetails(id)
    })
  }

  getStudentDetails(id:any){
    this.api.getAStudentAPI(id).subscribe((result:any)=>{
      console.log(result);
      this.student = result
      console.log(this.student);
    })
  }

  updatestudent(){
    this.api.updatestudentAPI(this.student).subscribe((result:any)=>{
      alert("Student updated successfully!!!")
      this.router.navigateByUrl('/home')
    })
  }

  cancel(id:any){
    this.getStudentDetails(id)
  }

}

