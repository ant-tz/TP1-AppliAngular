export class Post {
  public created_at: Date = new Date();
  public loveIts = 0;

  constructor(public title: string, public content: string) {
  }
}
