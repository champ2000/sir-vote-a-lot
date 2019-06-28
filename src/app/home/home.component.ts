import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questionAndAnswers:any;
  votedAnswers:any; 
  

  constructor() { }

  ngOnInit() {
  }

  setQnA($event):void {
    this.questionAndAnswers = $event;
  }

  setAnswer($event:string):void {
    this.votedAnswers = ($event);
  }


}
