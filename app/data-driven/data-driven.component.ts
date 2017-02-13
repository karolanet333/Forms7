import {Component} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent{
    f: FormGroup;

    constructor(){
        this.f = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl('Caro', Validators.required),
                'email': new FormControl('mail@mail.com', [
                    Validators.required, 
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ])
            }),
            'password': new FormControl('', Validators.required),
            'gender': new FormControl('male')
        });
    }

    genders = [
        'male',
        'female'
    ];

    likes = [
        'dog',
        'cat',
        'bird',
        'lizard',
        'wale'
    ];

    onSubmit(){
        console.log(this.f);
    }
}