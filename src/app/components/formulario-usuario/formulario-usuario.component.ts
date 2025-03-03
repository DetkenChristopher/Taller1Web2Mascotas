import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {
  constructor(private servicio: UsuarioService){}

  nombre: any;
  email:any;

  guardar(fromulario:any){
    this.servicio.postUsuarios(fromulario.value).subscribe(()=>{
      window.location.reload()
    });

  }
}
