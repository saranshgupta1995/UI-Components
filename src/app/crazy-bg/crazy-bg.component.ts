import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'crazy-bg',
    templateUrl: './crazy-bg.component.html',
    styleUrls: ['./crazy-bg.component.css']
})
export class CrazyBgComponent implements OnInit {

    constructor() { }


    ngOnInit() {
        let currentMousePosition = {
            x: -1,
            y: -1
        }
        let p;
        window['requestAnimFrame'] = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window['mozRequestAnimationFrame'] ||
                window['oRequestAnimationFrame'] ||
                window['msRequestAnimationFrame'] ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var canvas = document.getElementById("canvas");
        var ctx = canvas['getContext']("2d");

        var W = window.innerWidth, H = window.innerHeight;
        canvas['width'] = W;
        canvas['height'] = H;
        canvas['mousePosition'] = {
            x: 0,
            y: 0
        };

        var particleCount = 140,
            particles = [],
            minDist: any = 70,
            dist;

        function paintCanvas() {
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fillRect(0, 0, W, H);
        }

        function getrelativeMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            currentMousePosition.x = evt.clientX - rect.left
            currentMousePosition.y = evt.clientY - rect.top
            return {
                x: ((evt.clientX - rect.width / 2) / rect.width) / 1.5,
                y: ((evt.clientY - rect.height / 2) / rect.height) / 1.5
            };
        }

        canvas.addEventListener('mousemove', function (evt) {
            getrelativeMousePos(canvas, evt);
        }, false);

        class Particle {
            x: number = Math.random() * W;
            y: number = Math.random() * H;
            vx: number = 0.04;
            lifeTime=0;
            vy: number = 0.04;
            radius: number = 1;

            constructor(){
                let that=this;
                setInterval(()=>{
                    that.x= Math.random()*W;
                    that.y= Math.random()*H;
                }, 5000 + Math.random() * 50000)
            }

            draw: () => void = function () {
                ctx.fillStyle = "rgba(255, 255, 200, " + (0.3+Math.min(Math.random(),0.7)).toString() + ")";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

                ctx.fill();
            };

            updateSpeed: () => void = function () {
                if(!~currentMousePosition.x)
                return
                let diffX = this.x - currentMousePosition.x
                let diffY = this.y - currentMousePosition.y
                this.x -=  diffX>= 40 ? ((this.x - currentMousePosition.x) / 1000) : 0 + Math.random() * 1 + Math.random() * -1;
                this.y -= diffY >= 40 ? ((this.y - currentMousePosition.y) / 1000) : 0 + Math.random() * 1 + Math.random() * -1;
                if (diffX*diffX+diffY*diffY<2500) {
                    this.x = Math.random() * W;
                    this.y = Math.random() * H;
                }
            };


        }

        for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // setInterval(()=>{
        //     for (var i = 0; i < particleCount; i++) {
        //         particles[i].x = Math.random() * W;
        //         particles[i].y = Math.random() * H;
        //     }
        // },1000)

        function draw() {

            paintCanvas();

            let p;
            for (var i = 0; i < particles.length; i++) {
                p = particles[i];
                p.draw();
            }

            update();
        }

        function update() {

            for (var i = 0; i < particles.length; i++) {
                p = particles[i];

                p.x += p.vx;
                p.y += p.vy

                if (p.x + p.radius > W)
                    p.x = p.radius;

                else if (p.x - p.radius < 0) {
                    p.x = W - p.radius;
                }

                if (p.y + p.radius > H)
                    p.y = p.radius;

                else if (p.y - p.radius < 0) {
                    p.y = H - p.radius;
                }

                let p2;
                for (var j = i + 1; j < particles.length; j++) {
                    p2 = particles[j];
                    distance(p, p2);
                }
                p.updateSpeed();

            }
        }

        function distance(p1, p2) {
            let dist: any, colorIndex: any;
            let dx = p1.x - p2.x;
            let dy = p1.y - p2.y;

            dist = Math.sqrt(dx * dx + dy * dy);

            if (dist <= minDist) {
                ctx.beginPath();
                colorIndex = parseInt((100.0 * dist / minDist).toString()) + 25;
                ctx.strokeStyle = "hsla(2," + colorIndex + "%,10%," + (1.2 - dist / minDist) + ")";
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();

                // var ax = 0,
                //     ay = 0;

                // p1.vx -= ax;
                // p1.vy -= ay;

                // p2.vx += ax;
                // p2.vy += ay;
            }
        }

        function animloop() {
            draw();
            window['requestAnimFrame'](animloop);
        }

        animloop();
    }

}
