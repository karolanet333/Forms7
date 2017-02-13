import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {HomeComponent} from './home.component'
import {UserComponent} from './user/user.component'
import {USER_ROUTES} from './user/user.routes'

const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent},
    //{ path: 'user/:id', component: UserComponent, children: USER_ROUTES},
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: '/user/1'}
    
];

//export const routing = RouterModule.forRoot(APP_ROUTES);