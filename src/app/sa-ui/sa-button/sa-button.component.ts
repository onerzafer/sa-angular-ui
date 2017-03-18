import { Directive, Component, OnInit } from '@angular/core';

/*@Directive({
  selector: 'button[sa-button], a[sa-button]',
  host: {
    '[class.sa-button]': 'true',
  }
})
export class SaButtonStyler {}*/

@Component({
  selector: 'button[sa-button], a[sa-button]',
  templateUrl: './sa-button.component.html',
  styleUrls: ['./sa-button.component.scss']
})
export class SaButton implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
