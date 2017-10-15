import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { concat } from 'rxjs/operator/concat';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'array-form',
    templateUrl: './array.component.html',
    // styleUrls: ['./array.component.scss']
})
export class ArrayForm implements OnInit {
    form;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        })
     }

    ngOnInit() { }

    /* form = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormGroup({
            email: new FormControl(),
            phone: new FormControl()
        }),
        topics: new FormArray([])
    }); */

    addTopic(topic: HTMLInputElement){
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    removeTopic(topic: FormControl){
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }

    get topics(){
        return this.form.get('topics') as FormArray;
    }

}