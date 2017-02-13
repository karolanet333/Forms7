import {Component, OnInit} from '@angular/core'
//import {Response} from '@angular/http'
import {BasicService} from './basic.service'

@Component({
    moduleId: module.id,
    selector: 'basic-http',
    templateUrl: './basic.service.html',
    providers: [BasicService]
})
export class BasicServiceComponent implements OnInit{

    items: any[];
    asyncString = this.basicService.getData();

    constructor(private basicService: BasicService){
    }

    ngOnInit(){
        this.basicService.getData()
            .subscribe(
                (data: any) => console.log(data)
            );
    }

    onSubmit(username: string, email: string){
        this.basicService.sendData({username: username, email: email})
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
    }

    onGetData(){
        this.basicService.getOwnData()
            .subscribe(
                data => {
                    const myArray: any[] = [];
                    for (let key in data){
                        myArray.push(data[key]);
                    }
                    this.items = myArray;
                }
            );
    }
}

