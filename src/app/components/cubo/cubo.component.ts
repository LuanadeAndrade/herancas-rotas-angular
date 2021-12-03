import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  valor: number = 0

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => { this.valor = params['value']
   })
  }

  ngOnInit(): void {
  }

}
