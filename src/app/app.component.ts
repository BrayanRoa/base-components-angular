import { Component } from '@angular/core';
import { TableComponent } from './shared/components/table/table.component';
import { ActionsButton } from './shared/interfaces/common-data';
import { MetaData } from './shared/interfaces/http-common-response';
import { CommonModule } from '@angular/common';
import { DummyData } from './shared/json/dummy-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  eventTrigger = false; // Estado que se pasará al hijo

  data = DummyData

  tableColumns = [
    { field: 'name', header: 'Name' },
    { field: 'category.name', header: 'Category' },
    { field: 'amount', header: 'Amount' },
    { field: 'date', header: 'Date' },
    { field: 'type', header: 'Type' },
    { field: 'repeat', header: 'Repeat' },
  ];

  actions: ActionsButton[] = [
    {
      label: '',
      type: 'button',
      icon: 'pi pi-pencil',
      color: 'primary',
      callback: (row: number | string) => this.editRow(row),
    },
    {
      label: '',
      type: 'button',
      icon: 'pi pi-trash',
      color: 'danger',
      callback: (row: number | string) => this.deleteRow(row),
    },
  ];

  metaData: MetaData = {
    totalRecords: 0,
    totalPages: 2,
    currentPage: 1,
    next_page: true
  };

  onPageChange(data: { page: number; per_page: number, search: string }): void {
    // this.loadTransactions({ page: data.page, per_page: data.per_page, searchTerm: data.search });
  }


  editRow(row: any) {
    console.log('Editing row:', row);
  }

  deleteRow(id: number | string) {
    console.log("deleting row", id);
  }
}
