import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
    moduleId: module.id,
    selector: 'data-component-send',
    template: `
        <hr>
        <p>
            DATA COMPONENT SEND
        </p>
        <div>
            <input type="text" #input>
            <button (click) = "addData(input.value)">Add Data</button>
            <button (click) = "getData()">Get Data</button>
            <button (click) = "onSend(input.value)">Send Data</button>
        </div>
        <hr>
        <ul>
            <li *ngFor="let d of data">{{d}}</li>
        </ul>
              `
})
export class DataComponentSend{

    data: string[] = [];

    constructor(private dataService: DataService){}

    addData(value: string){
        this.dataService.addData(value);
    }

    getData(){
        this.data = this.dataService.getData();
    }

    onSend(value: string){
        this.dataService.pushData(value);
    }
}