import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-likes',
  templateUrl: './quote-likes.component.html',
  styleUrls: ['./quote-likes.component.css']
})
export class QuoteLikesComponent implements OnInit {
  numberOfLikes: number=0;
  numberOfDislike:number=0;
  likesImgClick(){
    this.numberOfLikes++
  }
  
  dislikeImgClick(){
    this.numberOfDislike++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
 