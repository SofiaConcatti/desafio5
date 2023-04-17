import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from './datos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'Programación Reactiva';
  datos: any[] = [];
  subcripcion!: Subscription;

  constructor(private datosService: DatosService) {}

  ngOnDestroy(): void {
    if (this.subcripcion) {
      this.subcripcion.unsubscribe();
    }
  }

  obtenerDatos(): void {
    this.subcripcion = this.datosService
      .obtenerDatosObservable()
      .subscribe((datos) => {
        this.datos = datos;
      });
  }

  filtrar(): void {
    this.subcripcion = this.datosService
      .obtenerDatosObservable()
      .pipe(map((datos) => datos.filter((dato) => dato.nombre.includes('1'))))
      .subscribe((datosFiltrados) => {
        this.datos = datosFiltrados;
      });
  }
}
