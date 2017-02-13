import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
    moduleId: module.id,
    selector: 'data-component-receive',
    template: `
        <hr>
        <p>
            DATA COMPONENT RECEIVE
        </p>
        <div>
            <input type="text" #input>
            <button (click) = "addData(input.value)">Add Data</button>
        </div>
        <hr>
        <ul>
            <li *ngFor="let d of data">{{d}}</li>
        </ul>
        <p>
            Received Value: <br>
            {{value}}
        </p>
              `
})
export class DataComponentReceive implements OnInit{

    value = '';
    data: string[] = [];

    constructor(private dataService: DataService){}

    ngOnInit(){
        this.dataService.pushedData.subscribe(
            (d:string) => this.value = d
        );
    }

    addData(value: string){
        this.dataService.addData(value);
    }

    getData(){
        this.data = this.dataService.getData();
    }
}