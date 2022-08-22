import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graphics1Component } from "./graphics1/graphics1.component";
import { PagesComponent } from "./pages.component";
import { PAGE_ROUTES } from "./pages.routes";
import { ProgressComponent } from "./progress/progress.component";

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModule,
        PAGE_ROUTES
    ]
  })
  export class PagesModule { }
  