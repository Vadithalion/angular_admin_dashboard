import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graphics1Component } from "./graphics1/graphics1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";

const pagesRoutes: Routes = [
    {
        path:'',
        component: PagesComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graphics1', component: Graphics1Component },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);