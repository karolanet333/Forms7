import {Component} from '@angular/core';
import {LogService} from './log.service';

@Component({
    moduleId: module.id,
    selector: 'log-component',
    template: `
        <div>
            <input type="text" #input>
            <button (click) = "onLog(input.value)">Log</button>
        </div>
              `//,
    //providers: [LogService]
})
export class LogComponent{

    value = '';

    constructor(private logService: LogService){}

    onLog(value: string){
        this.logService.writeToLog(value);
    }
}