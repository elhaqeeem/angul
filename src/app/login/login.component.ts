import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    pullRightClass: string = 'menuleft-open';
    pullRightSBClass: string = 'menuright-open';
    constructor(public router: Router) {}

    ngOnInit() {
       const dom: Element = document.querySelector('body');
       dom.classList.remove(this.pullRightClass);
      dom.classList.remove(this.pullRightSBClass);
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
