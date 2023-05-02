import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-inicio',
  templateUrl: './nav-inicio.component.html',
  styleUrls: ['./nav-inicio.component.css']
})
export class NavInicioComponent {
  title = 'sweetAlert'
  acerca() {
    Swal.fire({
            title: 'RSS DESING',
      text: 'PAGINA CREADA POR RSS | www.rss.com.',
      imageUrl: 'assets/img/rss.desing.png',
      imageWidth: 600,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
  }
}

