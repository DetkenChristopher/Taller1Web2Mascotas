import { Component } from '@angular/core';
import { FormularioUsuarioComponent } from '../../components/formulario-usuario/formulario-usuario.component';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [FormularioUsuarioComponent],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

}
