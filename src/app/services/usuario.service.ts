import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private API_USUARIOS='http://localhost:3000/usuarios'

  
//Mostrar usuariro
GetUsuario():Observable<any>{
 return this.http.get(this.API_USUARIOS)
}

///getuserById

getUsuarioById(id:any):Observable<any>{
 return  this.http.get(`${this.API_USUARIOS}/${id}`);

}

  //guardarUsuario
  postUsuarios(usuario:any):Observable<any>{
    return this.http.post(this.API_USUARIOS, usuario)
  }
  
  ///borrarUsuario
  deleteUsuario(id:any):Observable<any>{
    return this.http.delete(`${this.API_USUARIOS}/${id}`)
  }

  //editarUsuario
  putUsuario(usuario:any):Observable<any>{
return this.http.put(`${this.API_USUARIOS}/${usuario.id}`, usuario)
  }
 
}
