import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  drinksForm = new FormGroup({
    BebidaName: new FormControl('', [Validators.required]),
    Tipo: new FormControl('', [Validators.required]),
    Precio: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.maxLength(5),
    ]),
    Stock: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    Descripcion: new FormControl('', [Validators.required]),
  });

  constructor(public dialog: MatDialog,) { }

  onSubmit() {
    console.log(this.drinksForm);
    if (this.drinksForm.valid) {
      this.dialog.open(ModalComponent, {
        data: {
          data: this.drinksForm.value,
        },
      });
    }
  }
}
