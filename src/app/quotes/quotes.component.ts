import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes: Quotes[]=[
{id:1, userName:'Norah', quoteTitle:'Happiness'},
{id:2, userName:'James', quoteTitle:'Family'},
{id:3, userName:'Daniel', quoteTitle:'Leadership'},
{id:4, userName:'Lucy', quoteTitle:'Love'},
{id:5, userName:'Diana', quoteTitle:'Marriage'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
