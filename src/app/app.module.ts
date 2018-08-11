import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostService} from './services/post.service';
import {RouterModule, Routes} from '@angular/router';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {NewPostComponent} from './new-post/new-post.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: '', component: PostListComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    FourOhFourComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
