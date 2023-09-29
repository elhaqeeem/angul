import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
    pullRightClass: string = 'menuleft-open';
    pullRightSBClass: string = 'menuright-open';
  constructor() { }

  ngOnInit() {
    const dom: Element = document.querySelector('body');
    dom.classList.remove(this.pullRightClass);
    dom.classList.remove(this.pullRightSBClass);
  }

}
