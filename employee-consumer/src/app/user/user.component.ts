import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  employees: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   /*let response = this.http.get("http://localhost:8085/api/employees");

    response.subscribe((data)=>this.employees=response); */
    
    let response = this.http.get('http://localhost:8085/api/employees');
    response.subscribe((data)=>this.employees =data);
    
      }

}
