import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { PostsService } from '../services/posts.service';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post)
      .subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      // (error: Response) => {
        (error: AppError) => {
        if (error instanceof BadInput){
          // this.form.setErrors(error.json());

          // this.form.setErrors(error.originalError); GIUSTA
        }
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      // (error: Response) => {
        (error: AppError) => {
        // if (error.status === 404)
        if( error instanceof NotFoundError)
          alert('This post has already been deleted');
        else {
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

}