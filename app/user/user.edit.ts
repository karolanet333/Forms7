import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ComponentCanDeactivate} from './user-edit.guard'
import {Observable} from 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    template:
        `
            <h2>User Edit Component</h2>
            <button (click) = "done = true">Done</button>
            <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
        `
})
export class UserEditComponent implements ComponentCanDeactivate{

    done = false;
 
    constructor(private router: Router){ }

    onNavigate(){
        this.router.navigate(['/']);
    }

    canDeactivate(): Observable<boolean> | boolean{
        if (!this.done){
            return confirm('Do you want to leave?');
        }
        return true;
    }
}