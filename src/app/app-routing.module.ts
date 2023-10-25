import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaComponent } from './pages/tabla/tabla.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent},
  { path: 'tabla',  component: TablaComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
