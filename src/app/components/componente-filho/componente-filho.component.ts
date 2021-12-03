import { Component} from '@angular/core';
import { ComponentPaiComponent } from '../component-pai/component-pai.component';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
// extends: componente filho recebe todas as propriedades e metodos do component pai. Forma de reproveitar codigos.
export class ComponenteFilhoComponent extends ComponentPaiComponent {

 

}
