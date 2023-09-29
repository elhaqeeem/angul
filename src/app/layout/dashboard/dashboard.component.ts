import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    pushRightClass: string = 'menuleft-open';
    pushRightSBClass: string = 'menuright-open';

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/img/mainbanner1.jpg',
                label: 'Angular starter kit',
                text:
                    'We have used NGBootstrap for this demo'
            },
            {
                imagePath: 'assets/img/mainbanner2.jpg',
                label: 'Angular starter kit',
                text: 'Is showing competibility of HTML UI'
            },
            {
                imagePath: 'assets/img/mainbanner3.jpg',
                label: 'Angular starter kit',
                text:
                    'Is free with the Bootstrap template design'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        const dom: Element = document.querySelector('body');
        dom.classList.add(this.pushRightClass);
        dom.classList.add(this.pushRightSBClass);
     }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
