import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { AppComponent } from './app.component';
const appRoutes = [
  {
    path: 'customers',
    component: CustomersComponent,
    loadChildren: './manage-services/manage-services.module#CustomersModule',
    data: { preload: true }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    loadChildren: './manage-checklist/manage-checklist.module#OrdersModule',
    data: { preload: true }

  },
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full',
  },
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, CustomersModule, OrdersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
