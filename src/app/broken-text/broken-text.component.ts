import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'broken-text',
    templateUrl: './broken-text.component.html',
    styleUrls: ['./broken-text.component.css']
})
export class BrokenTextComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    initiateChildren(elem) {
        for (let i = 0; i < elem.children.length; i++) {
            let child = elem.children[i]
            child.addEventListener('mouseenter', (e) => {
                child.classList.add('active');
            });
            child.addEventListener('animationend', (e) => {
                e.target.classList.remove('active');
            });
        }
    }
}

