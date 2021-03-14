import { LoginComponent } from './auth/login/login.component';
import { VolunteerComponent } from './auth/volunteer/volunteer.component';
import { StudentComponent } from './auth/student/student.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'auth/student',
        component: StudentComponent
    },
    {
        path: 'auth/volunteer',
        component: VolunteerComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
