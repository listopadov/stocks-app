import {Component, OnInit} from '@angular/core';
import {GainerPromo} from '../../shared/models/gainer-promo';
import {GainersService} from './gainers.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.scss']
})
export class GainersComponent implements OnInit {
  gainerCompanies: Array<GainerPromo>;
  isSending = true;

  constructor(private gainerServeice: GainersService) {
  }

  ngOnInit() {
    this.gainerServeice.getGainerCompaniesData()
      .pipe(
        finalize(() => {
          this.isSending = false;
        })
      )
      .subscribe(
        (data) => {
          this.gainerCompanies = data;
        },
        (error) => {}
      );
  }

}
