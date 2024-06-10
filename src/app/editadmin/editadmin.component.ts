import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit{

  editAdminStatus:boolean = false
  adminDetails:any = {}

  adminProfile:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6or8gFl2eWFCpwUNud6Uhs4XtpL1gYjXQw&s"

  constructor(private api:AdminAPIService){}

  ngOnInit(): void {
    this.api.getAdminDetailsAPI().subscribe((result:any)=>{
      this.adminDetails = result
      console.log(result);
      if(result.picture){
        this.adminProfile = result.picture
      }
    })
  }

  editAdminBtn(){
    this.editAdminStatus = true
  }

  cancel(){
    this.editAdminStatus = false
  }

  getFile(event:any){
    let uploadFile = event.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event:any)=>{
      this.adminProfile = event.target.result
      this.adminDetails.picture = this.adminProfile
    }
    console.log(this.adminDetails);
  }
  
  updateAdmin(){
    this.api.updatedAdminDetails(this.adminDetails).subscribe({
      next:(result:any)=>{
        this.editAdminStatus = false
        alert("Updated Successfully!!!")
        sessionStorage.setItem('adminDetails',JSON.stringify(result))
      },
      error:(reason:any)=>{
        console.log(reason);
        alert("Updation Failed..Please try after sometime!!!")
      }
    })
  }
}
