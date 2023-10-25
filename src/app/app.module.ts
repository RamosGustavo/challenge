import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { ModalComponent } from './pages/modal/modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxGridModule,
	IgxInputGroupModule
} from "igniteui-angular";



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    IgxPreventDocumentScrollModule,
    HttpClientModule,
    IgxGridModule,
    IgxInputGroupModule
  ],
  providers: [provideNgxMask(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
