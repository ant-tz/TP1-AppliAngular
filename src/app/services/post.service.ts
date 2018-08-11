import {Post} from '../Models/post.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
  postSubject = new Subject<Post[]>();

  private posts: Post[] = [];

  constructor(private httpClient: HttpClient) {
    this.getPostsFromServer();
  }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  loveIt(post: Post) {
    post.loveIts++;
    this.savePostsToServer();
    this.emitPostSubject();
  }

  dontLoveIt(post: Post) {
    post.loveIts--;
    this.savePostsToServer();
    this.emitPostSubject();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePostsToServer();
    this.emitPostSubject();
  }

  deletePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1);
    this.savePostsToServer();
    this.emitPostSubject();
  }

  savePostsToServer() {
    this.httpClient
      .put('https://projet-blog-oc.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<Post[]>('https://projet-blog-oc.firebaseio.com/posts.json')
      .subscribe((response) => {
        if (response !== null) {
          this.posts = response;
        } else {
          this.posts = [];
        }
        this.emitPostSubject();
      }, (error) => {
        console.log('Erreur de chargement ! ' + error);
      });
  }
}
