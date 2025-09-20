import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  standalone: false,
  templateUrl: './single-post.html',
  styleUrl: './single-post.css'
})
export class SinglePost implements OnInit {
    constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {

  let found:any=null
  this.postid = this.route.snapshot.paramMap.get('id') || null;
  const savedPosts = localStorage.getItem(this.storageKey);
  if (savedPosts) {
    this.posts = JSON.parse(savedPosts);
  }
   if (this.postid) {
      found = this.posts.find(posts => (posts.id) == this.postid);
      this.posttitle3=found.title
      this.postbody3=found.body
      this.postid3=found.id
    }


 
      
  }
 posts: any[] = [];
  posttitle3: string | null = null;
    postbody3: string | null = null;
      postid3: string | null = null;
postid: string | null = null; 
 private storageKey = 'postskey';
 postbody2 : string | null = null; 
 posttitle2 : string | null = null;
}
