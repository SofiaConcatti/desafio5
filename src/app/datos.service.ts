import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor() {}

  obtenerDatos(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, nombre: 'Dato 1' },
          { id: 2, nombre: 'Dato 2' },
          { id: 3, nombre: 'Dato 3' },
        ]);
      }, 2000);
    });
  }
  obtenerDatosObservable(): Observable<any[]> {
    return of([
      { id: 1, nombre: 'Dato 1' },
      { id: 2, nombre: 'Dato 2' },
      { id: 3, nombre: 'Dato 3' },
    ]).pipe(delay(1000));
  }
}
