 import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Cliente } from '../backend/cliente';

@Component({
  templateUrl: './clientes-det.component.html',
  styleUrls: ['./clientes-det.component.scss']
})
export class ClientesDetComponent implements OnInit {

  constructor(
    private dlgRef: MatDialogRef<ClientesDetComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Cliente
  ) { }

  myForm = new FormGroup({
    nome: new FormControl(this.data.nome, Validators.required),
    dtnasc: new FormControl(this.data.dtnasc, Validators.required),
    estadocivil: new FormControl(this.data.estadocivil, Validators.required),
    salario: new FormControl(this.data.salario)
  })

  listaEstadoCivil = [
    'Casado', 'Solteiro', 'Viuvo', 'Desquitado'
  ]

  ngOnInit(): void {
    this.myForm.markAllAsTouched()
  }

  salva() {
    const {nome, dtnasc, estadocivil, salario} = this.myForm.value
    let retorno = this.data
    retorno.nome = nome || ''
    retorno.dtnasc = dtnasc || ''
    retorno.estadocivil = estadocivil || ''
    retorno.salario = salario || 0
    this.dlgRef.close(retorno)
  }

}
