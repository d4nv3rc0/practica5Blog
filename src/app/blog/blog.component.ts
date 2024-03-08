import { Component } from '@angular/core';
import { INoticia } from '../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  /*Two way databiding*/

  newNoticia: INoticia = {titulo: "", imagen: "", bodynoticia: "", fecha: ""}

  /*Inicializar las noticias dentro de un array*/

  arrNoticias: INoticia[] = [
    {
    titulo: 'La comida es fantástica',
    imagen:'https://images.unsplash.com/photo-1707282462551-023e3b14417f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
    bodynoticia: 'La comida como remedio para levantar el ánimo',
    fecha:'2024-03-12'
    },

    {
      titulo: 'El hifi como acompañante ideal',
      imagen:'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bodynoticia: 'Nada como el sonido',
      fecha:'2024-03-12'
    },
 ]

 getNoticias(): string {
  let html = "";
  for (let noticia of this.arrNoticias){
    html += `<article>
    <figure>
        <img src="${noticia.imagen}" alt="${noticia.titulo}">
    </figure>
    <h3>${noticia.titulo}</h3>
    <p>${noticia.bodynoticia}</p>
    <small>${noticia.fecha}</small>
</article>`
  }
  return html;

 }
 getDataNoticia(){
  /*console.log(this.newNoticia) revisamos que se recojan los datos*/
  /*Validamos que los campos no estén vacíos*/
  if(this.newNoticia.titulo !=="" && this.newNoticia.bodynoticia !=="" && this.newNoticia.fecha !== "" && this.newNoticia.imagen !== ""){
    //Puedo insertar la noticia
    this.arrNoticias.push(this.newNoticia);
  }else{
    alert('No puede haber campos vacíos')
  }

 }
        

}
