import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {UserComponent} from "./components/user.component";
import {AboutComponent} from "./components/about.component";
import {UploadFileComponent} from "./components/uploadFile/uploadFile.component";
import {routing} from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, UserComponent, AboutComponent, UploadFileComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
