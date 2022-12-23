import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //busca referencia local en este caso txtBuscar y lo asigna al elemento txtBuscar
  //puede que el elemento sea null, entonces con ! le digo a angular que confie en mi
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  //injectar el servicio
  constructor(private gifsService: GifsService) { }

  buscar() { 

    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';

  }


}
