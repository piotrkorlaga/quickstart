import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {UploadFileComponent} from "./components/uploadFile/uploadFile.component";


const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'upload',
        component: UploadFileComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);