import { Directive, ElementRef, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[crazyTextBreaker]'
})
export class TextBreakerDirective {

    @Input('letterClass') letterClass='';

    constructor(private el: ElementRef) { 
    }
    
    ngAfterViewInit(){
        let innerText=this.el.nativeElement.innerText.split('');
        this.el.nativeElement.innerHTML='';
        let count=0;
        innerText.forEach(element => {
            this.el.nativeElement.innerHTML+=`<span iter='${count}s' class='${this.letterClass}'>${element}</span>`;
            ++count;
        });
    }

}
