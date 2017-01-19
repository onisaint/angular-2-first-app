import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ServiceComponent } from './service/service.component';
import { CmpAComponent } from './service/cmp-a.component';
import { CmpBComponent } from './service/cmp-b.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { DataDrivenComponent } from './forms/data-driven/data-driven.component';
import { PipesComponent } from './pipes/pipes.component';
import { DoublePipePipe } from './pipes/double-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    PipesComponent,
    DoublePipePipe,
    FilterPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
