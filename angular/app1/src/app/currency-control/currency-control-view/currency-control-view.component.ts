import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-currency-control-view',
  templateUrl: './currency-control-view.component.html',
  styleUrls: ['./currency-control-view.component.scss']
})

export class CurrencyControlViewComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  onClick(card) {
      
      setTimeout(() => {
          this._router.navigate(['/currency-control/' + card]);
      }, 300);
      
  }

}
