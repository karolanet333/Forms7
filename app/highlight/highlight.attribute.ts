//import {Directive, ElementRef, Renderer} from '@angular/core'
import {Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core'

@Directive({
    selector: '[highlight]'
})
export class HighlightAttribute{

    @Input() defaultColor: string;
    @Input('highlight') highlightColor='green';
    private backgroundColor = this.defaultColor;

    @HostListener('mouseenter') mouseenter(){
        this.backgroundColor = this.highlightColor;
    };

    @HostListener('mouseleave') mouseleave(){
        this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') get setBackgroundColor(){
        return this.backgroundColor;
    }

    //constructor(private elementRef: ElementRef, private renderer: Renderer){
        //this.elementRef.nativeElement.style.backgroundColor="green";
        //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
    //}

    constructor(){

    }

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }
}