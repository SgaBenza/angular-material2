import { NgModule } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';


@NgModule({
  exports:[
    MatInputModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ]
})
export class MaterialDesignModule { }
