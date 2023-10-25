import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { ModalComponent } from './pages/modal/modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
} from "igniteui-angular";
import { 
	IgxSparklineCoreModule,
	IgxSparklineModule
} from "igniteui-angular-charts";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

//I keep the new line
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
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxSparklineCoreModule,
    IgxSparklineModule
  ],
  providers: [provideNgxMask(),],
  bootstrap: [AppComponent]
})
export class AppModule {
}
