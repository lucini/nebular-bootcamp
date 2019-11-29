import {Component, OnInit} from '@angular/core';
import {Produto} from '../../../model/produto';
import {ProdutoService} from '../../../service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {
  settings = {
    noDataMessage: 'Não há registros',
    columns: {
      id: {
        title: 'Código',
        editable: false
      },
      descricao: {
        title: 'Descrição',
      },
      valorUnitario: {
        title: 'Valor Unitário'
      },
    },
    actions: {
      columnTitle: 'Ações',
      position: 'right'
    },
    add: {
      addButtonContent: 'Novo'
    },
    edit: {
      editButtonContent: 'Editar',
      saveButtonContent: 'Salvar',
      cancelButtonContent: 'Cancelar'
    },
    delete: {
      deleteButtonContent: 'Excluir',
      confirmDelete: true
    }
  };

  source: Produto[];

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.loadList();
  }

  private loadList() {
    this.produtoService.findAll().subscribe(val => this.source = val);
  }

  deletar(event): void {
    const produto = event.data as Produto;
    // const index = this.source.findIndex(val => val == produto);
    // this.source.splice(index, 1);

    this.produtoService.delete(produto.id).subscribe(() => {
      this.loadList();
    });

  }
}
