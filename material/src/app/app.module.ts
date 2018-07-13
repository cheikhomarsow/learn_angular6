import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { ListPostComponent } from './posts/list-post/list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ListPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
