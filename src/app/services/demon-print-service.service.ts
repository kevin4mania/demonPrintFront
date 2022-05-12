import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DemonPrintServiceService {

  constructor(private http: HttpClient) { }

  obtenerListadoArchivos(){
    return this.http.get(`${environment.demonPrintService}/api/gestorImpresion/obtenerArchivos`);
  }

  reimprimir(archivo:string){
    return this.http.get(`${environment.demonPrintService}/api/gestorImpresion/reimpresion/${archivo}`);
  }

  //** */
  loadingCarga(value: boolean) {
    if (value) {
      let timerInterval!: any;
      Swal.fire({
        icon: 'info',
        title: 'Cargando Datos',
        text: 'Por Favor espere...',
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      return true;
    } else {
      Swal.close();
      return false;
    }
  }

}
