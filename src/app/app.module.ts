import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerComponentComponent } from './logger-component/logger-component.component';
import { TracerComponent } from './tracer/tracer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { RemoteInterceptorService } from './services/remote-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoggerComponentComponent,
    TracerComponent,
    CategoriaComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RemoteInterceptorService,
    multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
