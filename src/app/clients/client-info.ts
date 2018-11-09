import { Component, OnInit} from '@angular/core';

import { HttpService} from './http.service';
import {Clients} from './clients';
   
@Component({
    selector: 'wireframe-component',
    templateUrl:  'wireframe.html',
    styleUrls: ['wireframe.css'],
    providers: [HttpService]
})
export class Wireframe implements OnInit { 
   
    clients: Clients[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getData().subscribe(data => this.clients=data["clientList"]);
    }
 ind:number;
 getIndex(i:number){
    this.ind =i;
 }
    
}