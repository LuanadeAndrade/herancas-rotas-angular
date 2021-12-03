import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipes',
  templateUrl: './testes-pipes.component.html',
  styleUrls: ['./testes-pipes.component.css']
})
export class TestesPipesComponent implements OnInit {

  
  dados: any = {

    dataDoEvento: new Date(),
    preco: 35.00,
    ingressosLimitados: 0.8465
    }


  constructor() { }

  ngOnInit(): void {
  }

}
