import { Component, ViewChild, ElementRef } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES, FormControl } from "@angular/forms";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    selector: "firebase",
    templateUrl: `client/components/firebase/firebase.component.html`
})
export class FirebaseComponent {
    items: FirebaseListObservable<any[]>;
    form: FormGroup;
    select: FormControl = new FormControl();
    keys: string[] = [];
    @ViewChild("formEl") formEl: ElementRef;

    constructor(public af: AngularFire, fb: FormBuilder) {
        this.items = af.database.list('items');
        af.database
            .object("")
            .subscribe((data) => this.keys = Object.keys(data));

        this.form = fb.group({
            "bucket": ["", Validators.required],
            "value": ["", Validators.required]
        })
    }

    insert() {
        if (this.form.valid) {
            this.af.database.list(this.form.controls['bucket'].value).push(this.form.controls['value'].value);
            this.formEl.nativeElement.reset();
        }
    }

    onChangeSelect(data: string) {
        this.items = this.af.database.list(data);
    }
}