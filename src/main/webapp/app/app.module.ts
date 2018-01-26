import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { ScalpApplicationSharedModule, UserRouteAccessService } from './shared';
import { ScalpApplicationAppRoutingModule} from './app-routing.module';
import { ScalpApplicationHomeModule } from './home/home.module';
import { ScalpApplicationAdminModule } from './admin/admin.module';
import { ScalpApplicationAccountModule } from './account/account.module';
import { ScalpApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        ScalpApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ScalpApplicationSharedModule,
        ScalpApplicationHomeModule,
        ScalpApplicationAdminModule,
        ScalpApplicationAccountModule,
        ScalpApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ScalpApplicationAppModule {}
