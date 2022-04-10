import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quote: Quotes[]=[
  
new Quotes(1,'Norah', 'Happiness','Be healthy and take care of yourself, but be happy with the beautiful things that make you, you.','Martin Luther',new Date(2022.1,10)),
new Quotes(2, 'James', 'Family','Everyone needs a house to live in, but a supportive family is what builds a home','Mother Teresa',new Date(2021,3,12)),
new Quotes(3, 'Daniel', 'Leadership','A leader is one who knows the way, goes the way, and shows the way','Malcom X',new Date(2022,2,15)),
new Quotes(4, 'Lucy', 'Love','The only thing we never get enough of is love; and the only thing we never give enough of is love','anonymous',new Date(2022,1,2)),
new Quotes(5, 'Diana', 'Marriage','At the root of every successful marriage is a strong partnership','Bi Msafwari',new Date(2022,1,23))
];
toggleDetails(index: number){
  this.quote[index].showDescription = !this.quote[index].showDescription;
}
deleteQuote(isComplete: any, index: any){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quoteTitle}?`)

    if (toDelete){
      this.quote.splice(index,1)
    }
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
