import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../Models/post.model';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
