import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../Models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  onLoveIt(post: Post): void {
    this.postService.loveIt(post);
  }

  onDontLoveIt(post: Post): void {
    this.postService.dontLoveIt(post);
  }

  onDeletePost(post: Post) {
    this.postService.deletePost(post);
  }

  ngOnInit() {
  }

}
