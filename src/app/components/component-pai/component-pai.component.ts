import { LiteralPrimitive } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-pai',
  template: ""
})
export class ComponentPaiComponent {
@Input() numeroComponent: number = 0;
  router: any;

isPar(valor: number): string {
  return valor % 2 === 0 ? "par" : "impar" ;
}

isPrime(valor: number): string {
    for(let divisor = 2; divisor < valor; divisor++){
      if(valor % divisor === 0) return 'não é primo';
  }
  return 'é primo'
}

onClickCubo(): void {
  this.router.navigate(['/cubo'], {queryParams: {value: this.numeroComponent}} )
}

}
