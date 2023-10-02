import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  loading: boolean = true;
  dataRES: any = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loading = true;
    this.loadDataApi();
  }

  loadDataApi() {
    this.postService
      .getPosts()
      .subscribe((res) => {
        console.log(res);
        this.dataRES = res;
      })
      .add(() => {
        this.loading = false;
      });
  }
}
