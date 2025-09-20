import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-post',
  standalone: false,
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css'
})
export class EditPost implements OnInit {
  constructor(private route: ActivatedRoute) {}
  posts: any[] = [];
  posttitle3: string | null = null;
    postbody3: string | null = null;
      postid3: string | null = null;
postid: string | null = null; 
  private storageKey = 'postskey';
 postbody2 : string | null = null; 
 posttitle2 : string | null = null;
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
  onedeitsave():void{
     let found:any=null
     
     if (this.postid) {
      found = this.posts.find(posts => (posts.id) == this.postid);
    }
    console.log(found.title);
    
    if(found){
      found.body=this.postbody2;
      found.title=this.posttitle2;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.posts));
  console.log(this.posts);

}


}




