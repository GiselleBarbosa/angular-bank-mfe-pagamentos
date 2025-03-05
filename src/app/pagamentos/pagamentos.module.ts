import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './pagamentos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PagamentosComponent }];

@NgModule({
  declarations: [PagamentosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagamentosModule {}
