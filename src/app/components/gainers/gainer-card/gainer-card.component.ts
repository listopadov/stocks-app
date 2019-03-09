import { Component, OnInit, Input } from '@angular/core';
import {GainerPromo} from '../../../shared/models/gainer-promo';

@Component({
  selector: 'app-gainer-card',
  templateUrl: './gainer-card.component.html',
  styleUrls: ['./gainer-card.component.scss']
})
export class GainerCardComponent implements OnInit {
  @Input() gainerCompany: GainerPromo;

  constructor() { }

  ngOnInit() {
  }

}
