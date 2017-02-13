import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
    moduleId: module.id,
    selector: 'data-component',
    template: `
        <hr>
        <div>
            <input type="text" #input>
            <button (click) = "addData(input.value)">Add Data</button>
            <button (click) = "getData()">Get Data</button>
        </div>
        <hr>
        <ul>
            <li *ngFor="let d of data">{{d}}</li>
        </ul>
              `,
    providers: [DataService]
})
export class DataComponent{

    data: string[] = [];

    constructor(private dataService: DataService){}

    addData(value: string){
        this.dataService.addData(value);
    }

    getData(){
        this.data = this.dataService.getData();
    }
}