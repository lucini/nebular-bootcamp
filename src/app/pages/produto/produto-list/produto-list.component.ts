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
      addButtonContent: 'Novo',
      createConfirm: true,
      createButtonContent: 'Salvar',
      cancelButtonContent: 'Cancelar'
    },
    edit: {
      editButtonContent: 'Editar',
      saveButtonContent: 'Atualizar',
      cancelButtonContent: 'Cancelar',
      confirmSave: true
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

  deletar(event): void {
    const produto = event.data as Produto;

    this.produtoService.delete(produto.id).subscribe(() => {
      this.loadList();
    });

  }

  salvar(event): void {
    const produto = event.newData as Produto;
    console.log(produto);

    this.produtoService.save(produto).subscribe(() => {
      this.loadList();
    });
  }

  private loadList() {
    this.produtoService.findAll().subscribe(val => this.source = val);
  }
}
