import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { VoteDataService } from '../services/vote-data.service';

@Component({
  selector: 'app-vote-form-admin',
  templateUrl: './vote-form-admin.component.html',
  styleUrls: ['./vote-form-admin.component.scss']
})
export class VoteFormAdminComponent implements OnInit {
  voteForm: FormGroup;
  constructor(private formBuilder: FormBuilder, @Inject(VoteDataService)private voteDataService: VoteDataService) { }

  ngOnInit() {
    this.voteForm = this.formBuilder.group({
      question: new FormControl('', Validators.maxLength(8)),
      answers: this.formBuilder.array([this.createAnswer()])
    });
    this.onChange();
  }

  onChange(): void {
    this.voteForm.valueChanges.subscribe(val => {
      if(val.question && val.question.length>=1 && val.answers.length >=2) {
          this.voteDataService.changeMessage(val.question);
          this.voteDataService.changeAnswers(val.answers);
      }
    })
  }

  createAnswer() {
    return this.formBuilder.control('', Validators.maxLength(8));
  }

  addAnswer(): void {
    this.answersArray.push(this.createAnswer());
  }

  removeItem(id:number):void {
    this.answersArray.removeAt(id);
  }

  onReset() {
    this.voteForm.reset();
    this.voteDataService.changeMessage('');
    this.voteDataService.changeAnswers([]);
    this.voteDataService.resetVotes();
  }

  get f() { return this.voteForm.controls; }
  get answersArray(): FormArray{
	  return this.voteForm.get('answers') as FormArray;
  }

}
