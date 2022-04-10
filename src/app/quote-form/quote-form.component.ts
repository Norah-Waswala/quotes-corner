import{ Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { Quote } from '@angular/compiler';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes = new Quotes(0,"","","","",new Date());
  @Output() add = new EventEmitter<Quotes>();

  addQuote(){
this.add.emit(this.newQuotes);
this.newQuotes = new Quotes(0,"","","","",new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
