import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  title = 'sweetAlert'
  acerca() {
    Swal.fire({
      title: 'RSS DESING',
      text: 'PAGINA CREADA POR RSS www.rss.com.',
      imageUrl: 'assets/img/rss.desing.png',
      imageWidth: 600,
      imageHeight: 400,
      imageAlt: 'Custom image',
    })
  }
}
