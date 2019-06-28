import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { VoteDataService } from '../services/vote-data.service';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.scss']
})
export class VoteFormComponent implements OnInit{
  question: string;
  answers: string[];
  selectedAnswer: string;

  constructor(@Inject(VoteDataService) private voteDataService: VoteDataService) {}

  ngOnInit() {
    this.voteDataService.currentMessage.subscribe(message => {
      this.question = message;
    });
    this.voteDataService.answers.subscribe(answers => {
      this.answers = answers;
      // check to see if we're resetting the form
      if (answers.length == 0) {
        this.selectedAnswer = null;
      }
    });
  }

  onSelectionChange(selection:string) {
    this.selectedAnswer = selection;
  }

  onSubmit() {
    this.voteDataService.changeResults(this.selectedAnswer);
    this.selectedAnswer = null
  }
}


