import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIHomeComponent } from './uihome/uihome.component';
import { UIHeaderComponent } from './uiheader/uiheader.component';



import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { UiMainHomeComponent } from './ui-main-home/ui-main-home.component';
import { FilterComponent } from './filter/filter.component';
import { UISearchComponent } from './uisearch/uisearch.component';
import { UiFooterComponent } from './ui-footer/ui-footer.component';
import { UiShoppingcardComponent } from './ui-shoppingcard/ui-shoppingcard.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UIHomeComponent,
    UIHeaderComponent,
    UiMainHomeComponent,
    FilterComponent,
    UISearchComponent,
    UiFooterComponent,
    UiShoppingcardComponent,
    ShowProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule, 
    MatSidenavModule,
    MatBadgeModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
