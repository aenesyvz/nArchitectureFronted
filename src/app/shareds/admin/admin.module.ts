import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdditionalServiceComponent } from './components/additional-service/additional-service.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CarDamageComponent } from './components/car-damage/car-damage.component';
import { CityComponent } from './components/city/city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorporateCustomerComponent } from './components/corporate-customer/corporate-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FindeksCreditScoreComponent } from './components/findeks-credit-score/findeks-credit-score.component';
import { FuelComponent } from './components/fuel/fuel.component';
import { IndividualCustomerComponent } from './components/individual-customer/individual-customer.component';
import { InvioceComponent } from './components/invioce/invioce.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { ModelComponent } from './components/model/model.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdditionalServiceComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDamageComponent,
    CityComponent,
    CorporateCustomerComponent,
    CustomerComponent,
    FindeksCreditScoreComponent,
    FuelComponent,
    IndividualCustomerComponent,
    InvioceComponent,
    OperationClaimComponent,
    ModelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
