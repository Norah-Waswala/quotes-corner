import{ Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newquote = new Quotes(0,"","","",new Date());
  constructor() { }

  ngOnInit(): void {
  }

}
