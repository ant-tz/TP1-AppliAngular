import {Component} from '@angular/core';
import {Post} from './Models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Premier article',
      content: 'Blablabla',
      loveIts: 1,
      created_at: new Date(2018, 1, 22, 15, 11)
    },
    {
      title: 'Deuxième article',
      content: 'Blablabla',
      loveIts: 1,
      created_at: new Date(2018, 4, 4, 9, 5)
    },
    {
      title: 'Troisième article',
      content: 'Blablabla',
      loveIts: 2,
      created_at: new Date(2018, 6, 20, 22, 50)
    },
    {
      title: 'Quatrième article',
      content: 'Blablabla',
      loveIts: 1,
      created_at: new Date(2018, 7, 14, 8, 12)
    }
  ]
  ;
}
