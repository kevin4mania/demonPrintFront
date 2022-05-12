import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DemonPrintServiceService } from 'src/app/services/demon-print-service.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  archivos: any = [];

  constructor(private service: DemonPrintServiceService, private toast:ToastrService) {}

  ngOnInit(): void {
    this.consultarArchivos();
  }

  consultarArchivos() {
    this.service.loadingCarga(true);
    this.service.obtenerListadoArchivos().subscribe((res: any) => {
      if (res.ok && res.codError == '0001') {
        this.archivos = res.body;
        this.service.loadingCarga(false);
      }else{
        this.service.loadingCarga(false);
        this.alertErrorMessage(res.msg)
      }
    });
  }

  reimpresion(archivo: string) {
    console.log('A reimprimir-->', archivo);
    this.service.reimprimir(archivo).subscribe((res: any) => {
      if (res.ok && res.codError == '0001') {
        this.toast.success(res.msg);
      }else{
        this.toast.error('No se pudo reimprimir')
      }
    });
  }


//** */
alertaReimpresion(archivo: string) {
  Swal.fire({
    title: 'Reimprimir',
    text: '¿Está seguro de reimprimir ' + archivo,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, reimprimir!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      this.reimpresion(archivo);
    }
  });
}
  alertErrorMessage(mensaje:any){
    Swal.fire({
      title: 'Error!',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
