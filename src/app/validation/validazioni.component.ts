import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrors,
    Validators,
    FormGroup,
} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'validazioni',
    templateUrl: './validazioni.component.html'
})

export class ValidazioniComponent {

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    customErrorFormControl = new FormControl('', [
        Validators.required,
        ValidazioniComponent.shouldBeUnique
    ]);

    private errore: FormGroup;

    constructor() {
        this.errore = new FormGroup({
            testCtrl : new FormControl('', [
                ValidazioniComponent.shouldBeUnique
            ])
        });
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh') {
                    resolve({ shouldBeUnique: true });
                } else resolve(null);
            }, 2000);
        });
    }

    onSubmit() {
        console.log('ciao');
    }
}