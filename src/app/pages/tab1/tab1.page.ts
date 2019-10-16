import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { Post } from "../../../interfaces/interfaces";
import { Router } from '@angular/router';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitado = true;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit() {
    this.siguientes();

    this.postsService.nuevoPost.subscribe(post => {

      this.posts.unshift(post);

    })
  }

  recargar(event) {
    this.siguientes(event, true);
    this.habilitado = true;
    this.posts = [];
  }

  siguientes(event?, pull: boolean = false) {

    this.postsService.getPosts(pull).subscribe(resp => {
      console.log(resp);
      // Asegurar cada una de las entradas sea un elemento nuevo con el spread.
      this.posts.push(...resp.posts);

      if (event) {
        event.target.complete();

        if (resp.posts.length === 0) {
          this.habilitado = false;
        }
      }
    });
  }

  goData() {
    this.router.navigate(['/main/tabs/tab2'], {queryParams: {
      name: 'Alexis',
      apellido: 'Narvaez',
      Edad: 19
    }})
  }
}
