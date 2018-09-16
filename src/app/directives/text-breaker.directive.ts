import { Directive, ElementRef, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[crazyTextBreaker]'
})
export class TextBreakerDirective {

    @Input('letterClass') letterClass = '';
    @Input('splitter') splitter = '';
    @Input('targetList') targetList = [];

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        let innerText = this.el.nativeElement.innerText.split(this.splitter);
        this.el.nativeElement.innerHTML = '';
        let count = 0;
        let classPart = '';
        innerText.forEach(element => {
            classPart = !this.targetList.length ? `class='${this.letterClass}'` : ``;
            this.el.nativeElement.innerHTML += (`<span iter='${count}s'` + classPart + `>${element}</span>`);
            ++count;
        });
    }

}
