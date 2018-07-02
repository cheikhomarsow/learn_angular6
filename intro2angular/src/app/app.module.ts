import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RecordsService } from './records.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      {
        path: 'data', //localhost:4200/data
        component: DataComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
