import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrors,
    Validator,
    Validators,
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
        // ValidazioniComponent.shouldBeUnique
    ]);

    form = new FormGroup({
        provalidator: new FormControl('', Validators.required),
        asincrovalida: new FormControl('',ValidazioniComponent.shouldBeUnique),
        emailidator: new FormControl('',[Validators.email, Validators.required])
    });

    //metodi per validazione
    get provalidator(){
        return this.form.get('provalidator');
    }

    get emailidator(){
        return this.form.get('emailidator');
    }

    get asincrovalida(){
        return this.form.get('asincrovalida');
    }


    constructor() { }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
           /*  setTimeout(() => {
                if (control.value === 'benza') {                   
                    resolve({ shouldBeUnique: true });
                    console.log('capedechezz');
                } else resolve(null);
            }, 2000); */

            if (control.value === 'benza') {                   
                resolve({ shouldBeUnique: true });
                console.log('capedechezz');
            } else resolve({ shouldBeUnique: false });
        
        });
    }

    static benza(control: AbstractControl): Observable<ValidationErrors | null> {
        return new Observable((result) => {

            if (control.value === 'benza') {   
                console.log('capedechezz');                
             
                
            } else return;
        
        });
    }

    onSubmit() {
        console.log('ciao');
    }
}