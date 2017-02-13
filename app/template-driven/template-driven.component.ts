import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProvinceDivition1} from './province-divition1'
import {ProvinceDivition1Service} from './province-divition1.service'

@Component({
    moduleId: module.id,
    selector: 'template-driven',
    templateUrl: './template-driven.component.html',
    providers: [ProvinceDivition1Service]
})
export class TemplateDrivenComponent implements OnInit{

    provinceDivitions1: [ProvinceDivition1]

    user = {
        username: 'pepe',
        email: 'pepe@argento.com',
        password: 'qqq',
        gender: 'male',
        country: 'Brasil',
        province: 4,
        provinceDivition1: 3,
        sports: [1, 3], 
        places: [9, 20]
    };

    genders = [
        'male',
        'female'
    ];

    countries = [
        'Argentina',
        'EEUU',
        'España',
        'Brasil'
    ];

    provinces = [
        {id:1, name:'Buenos Aires'},
        {id:2, name:'Cordoba'},
        {id:3, name:'Santa Fe'},
        {id:4, name:'Otra'}
    ];

    sports = [
        {id:0, name: 'Gym', checked: false},
        {id:1, name: 'Basket', checked: false},
        {id:2, name: 'Yoga', checked: false},
        {id:3, name: 'Boley', checked: false}
    ];

    places = [
        {id: 9, name: 'Bahamas', checked: false},
        {id: 20, name: 'Punta Cana', checked: false},
        {id: 22, name: 'Mar del Plata', checked: false}
    ];

    constructor(private provinceDivition1Service: ProvinceDivition1Service){
        this.provinceDivitions1 = provinceDivition1Service.getProvinceDivitions1();
    }

    ngOnInit(){
        this.sportsInit();
        this.placesInit();
    }

    sportsInit(){
        this.updateChecks(this.sports, this.user.sports);
    }

    placesInit(){
        this.updateChecks(this.places, this.user.places);
    }

    updateChecks(objectArray: any, numericArray: number[]) {
        for(let element of objectArray){
            for(let num of numericArray){
                if (num == element.id){
                    element.checked = true;
                }
            }
        }
    }

    /*provinceDivitions1 = [
        {id:1, name:'Lanus'},
        {id:2, name:'Avellaneda'},
        {id:3, name:'Lomas de Zamora'},
        {id:4, name:'Otra'}
    ];*/

    onSubmit(form: NgForm){

        let selectedSports: number[];
        let selectedPlaces: number[];

        if(form.valid){

            selectedSports = this.getSelectedSports();
            selectedPlaces = this.getSelectedPlaces();

            this.user.sports = selectedSports;
            this.user.places = selectedPlaces;

            console.log(this.user);

        } else{
            console.log("Estado del form: Valid = " + form.valid);
        }

    }

    getSelectedSports(): number[] { // right now: ['1','3']
        return this.sports
                .filter(opt => opt.checked)
                .map(opt => opt.id)
   }

   getSelectedPlaces(): number[] { // right now: ['1','3']
        return this.places
                .filter(opt => opt.checked)
                .map(opt => opt.id)
   }

   changeSport(index: number, event: any){
       this.sports[index].checked = event.currentTarget.checked;
   }

   changePlace(index: number, event: any){
       this.places[index].checked = event.currentTarget.checked;
   }
}