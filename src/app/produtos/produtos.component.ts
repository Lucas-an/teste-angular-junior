import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produtos } from '../backend/produtos';
import { ProdutosService } from '../backend/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit{


  constructor(
    private svp: ProdutosService
  ) { }

   // Dados dos produtos para aparecer na tela
   data: Produtos[] = []
   displayedColumns: string[] = ['Código', 'Descrição', 'Valor unitário'];

   myForm = new FormGroup({
     filtro: new FormControl('')
   })

   ngOnInit(): void {
    this.atualizaLista()
  }

  atualizaLista() {
    let filtro = this.myForm.value.filtro || ''
    this.data = []
    this.data = this.data.concat(this.svp.list(filtro))
  }


}
