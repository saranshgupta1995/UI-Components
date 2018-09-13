import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'sexy-button',
    templateUrl: './sexy-button.component.html',
    styleUrls: ['./sexy-button.component.css']
})
export class SexyButtonComponent implements OnInit {

    tilted = 0;
    powerTimer;
    @ViewChild('AwesomeTextSpan') textSpan;

    constructor() { 
    }

    animatePowerBar(width, td) {
        document.getElementsByClassName('power-up-bg')[0]['style'].transitionDuration = td;
        document.getElementsByClassName('power-up-bg')[0]['style'].width = width;
    }

    initiateAnimation(event) {
        let that = this;
        event.target.onmousemove = function (e) {
            let newAngle = ((e.pageX - this.offsetLeft) - this.offsetWidth / 2) / 60;
            that.tilted = newAngle < 0 ? -1 : 1;
            that.tilted = Math.abs(newAngle) < 0.5 ? 0 : that.tilted;
            if ((!that.tilted) && (!that.powerTimer)) {
                that.animatePowerBar('100%', '2s');
            } else if(that.tilted) {
                that.animatePowerBar('0', '0.1s');
                if (that.powerTimer) {
                    clearInterval(that.powerTimer);
                    that.powerTimer=null;
                }
            }
        }
    }

    crazyShow(text:string){
        let x = 0;
        let y=text.length;
        let that=this;
        let markers=['_',' ']
        let intervalID:any = setInterval(function () {
            that.textSpan.nativeElement.innerText=text.slice(0,x)+markers[x%2];
            if (++x === y+1) {
                window.clearInterval(intervalID);
            }
        }, 300);
    }

    throwClick(){
        this.crazyShow('Loading')
        // let targetElem = document.getElementsByClassName('sexy-button')[0];
        // targetElem['style']['top'] = (-this.poweredUp).toString()+'px';
    }

    stopAnimation() {
        this.tilted = 0;
        clearInterval(this.powerTimer);
        this.powerTimer = null;
        this.animatePowerBar('0', '0.1s');

    }

    ngOnInit() {
    }

}
