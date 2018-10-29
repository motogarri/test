import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.scss']
})

export class CurrencyViewComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  onClick(card) {
      setTimeout(() => {
          this._router.navigate(['/currency/' + card]);
      }, 100);
  }
  
}
