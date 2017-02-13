import {Routes} from "@angular/router";
import {UserDetailComponent} from "./user.detail";
import {UserEditComponent} from "./user.edit";
import {UserDetailGuard} from "./user-detail.guard";
import {UserEditGuard} from "./user-edit.guard";

export const USER_ROUTES: Routes = [
    {path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard]},
    {path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGuard]}
];
