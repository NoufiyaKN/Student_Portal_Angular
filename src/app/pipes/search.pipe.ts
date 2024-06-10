import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allStudents:any[], searchTerm:string): any[] {
    const result:any = []
    if(!allStudents || !searchTerm){
      return allStudents
    }
    allStudents.forEach((item:any)=>{
      if(item['name'].toLowerCase().includes(searchTerm.toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
