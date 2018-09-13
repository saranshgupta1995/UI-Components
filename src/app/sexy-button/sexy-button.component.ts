import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sexy-button',
    templateUrl: './sexy-button.component.html',
    styleUrls: ['./sexy-button.component.css']
})
export class SexyButtonComponent implements OnInit {

    tilted=0;

    constructor() { }

    initiateAnimation(event) {
        let that=this;
        event.target.onmousemove=function(e){
            let newAngle = ((e.pageX - this.offsetLeft) - this.offsetWidth / 2)/60;
            that.tilted=newAngle<0?-1:1;
            that.tilted = Math.abs(newAngle) <0.5?0:that.tilted;
            // event.target.style.transform = `skewY(${newAngle}deg) translate3d(0, -.5px, 0)`;
        }
    }

    stopAnimation(){
        this.tilted=0;
    }

    ngOnInit() {
    }

}
