import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    template:
    `
        <h1>Home Component!</h1>
        Param: {{param}}
        <hr>
        <h1>Lorem Ipsum</h1>
        <div>Lorem Ipsum es simplemente el texto<br> de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un <br>libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,<br> y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
        </div>
<br>

<a name="section1" id="section1">Section 1</a>
    `
})
export class HomeComponent implements OnDestroy{

    private subscription: Subscription;
    private param: string;

    constructor(private route: ActivatedRoute){
        this.subscription = route.queryParams.subscribe(
            (qParam: any) => this.param = qParam['analytics']
        );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}