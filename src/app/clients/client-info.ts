import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {Clients} from './clients';
   
@Component({
    selector: 'client-component',
    template: `<ul>
                <li *ngFor="let client of clients">
                <p>Имя пользователя: {{client?.general.firstname}}</p>
                </li>
            </ul>`,
    providers: [HttpService]
})
export class ClientComponent implements OnInit { 
   
    clients: Clients[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getData().subscribe(data => this.clients=data["clientList"]);
    }
}