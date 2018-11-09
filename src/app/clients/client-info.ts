import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { HttpService} from './http.service';
import {Clients} from './clients';
   
@Component({
    selector: 'client-component',
    template: `
    <mat-list>
     <mat-list-item class='list-item' *ngFor="let client of clients; let i = index"> 
                  <img mat-list-avatar src="{{client.general.avatar}}" alt="Desc 1">
                  <h3 mat-line>{{client.general.firstName +' ' +client.general.lastName }}</h3>
                  <p mat-line>
                    <span>{{client.job.title}}</span>
                  </p>
     </mat-list-item>   
     </mat-list>
            `,
            styleUrls: ['list-component.css'],
    providers: [HttpService]
})
export class ClientComponent implements OnInit { 
   
    clients: Clients[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getData().subscribe(data => this.clients=data["clientList"]);
    }

 
    
}