import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentshome',
  standalone: false,
  templateUrl: './componentshome.html',
  styleUrl: './componentshome.css'
})
export class Componentshome implements OnInit  {
  public posttitle: string = '';
  public postbody: string = '';
  public postid: string = '';
public posts:any=[]
private storageKey = 'postskey';
ngOnInit(): void {
  const savedposts= localStorage.getItem(this.storageKey)
  if(savedposts){
    this.posts=(JSON.parse(savedposts))
  }
}
  saveposts(): void {
    // 1. Create a new post object from the form data
    const newPost = {
      id: this.postid,
      title: this.posttitle,
      body: this.postbody
    };
this.posts.push(newPost);
localStorage.setItem(this.storageKey,JSON.stringify(this.posts))
}
deletpost(postid: string): void {
 const indexToDelete=this.posts.findIndex((post:any)=>post.id ==postid)
 if (indexToDelete !== -1) {
    // 3. Remove one element at the found index using splice().
    // The first parameter is the index to start at, and the second is the number of elements to remove.
    this.posts.splice(indexToDelete, 1);

    // 4. Update localStorage with the modified array.
    localStorage.setItem(this.storageKey, JSON.stringify(this.posts));

    console.log(`Post with id ${this.postid} deleted. Remaining posts:`, this.posts);
  } else {
    console.log(`Post with id ${this.postid} not found.`);
  }

}
}
