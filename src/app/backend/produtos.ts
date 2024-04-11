/**
 * Classe de Produtos
 */
export class Produtos {
  constructor(id:number = 1,codigo:number, descricao:string = '', valor_unitario: number ){
    this.id = id
    this.codigo = codigo
    this.descricao = descricao
    this.valor_unitario = valor_unitario
  }

  id: number = 1
  codigo:number = 0
  descricao:string =''
  valor_unitario: number = 0
}
