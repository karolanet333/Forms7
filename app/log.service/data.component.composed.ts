import {Component} from '@angular/core';
import {DataComponentReceive} from './data.component.receive';
import {DataComponentSend} from './data.component.send';
import {DataService} from './data.service';

@Component({
    moduleId: module.id,
    selector: 'data-component-composed',
    template:   `
        <data-component-send></data-component-send>
        <data-component-receive></data-component-receive>
                `,
    providers: [DataService]
})
export class DataComponentComposed{

}