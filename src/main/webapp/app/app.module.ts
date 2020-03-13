import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GateSharedModule } from 'app/shared/shared.module';
import { GateCoreModule } from 'app/core/core.module';
import { GateAppRoutingModule } from './app-routing.module';
import { GateHomeModule } from './home/home.module';
import { GateEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GateSharedModule,
    GateCoreModule,
    GateHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GateEntityModule,
    GateAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class GateAppModule {}
