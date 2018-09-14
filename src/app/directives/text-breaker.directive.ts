import { Directive, ElementRef, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[crazyTextBreaker]'
})
export class TextBreakerDirective {

    @Input('letterClass') letterClass;

    constructor(private el: ElementRef) { 
    }
    
    ngAfterViewInit(){
        let innerText=this.el.nativeElement.innerText.split('');
        console.log(innerText);
        this.el.nativeElement.innerHTML='';
        innerText.forEach(element => {
            this.el.nativeElement.innerHTML+=`<span class='${this.letterClass}'>${element}</span>`;
        });
    }

}
