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
      question: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      answers: this.formBuilder.array([this.createAnswer(true), this.createAnswer(true)])
    });
    this.onChange();
  }

  onChange(): void {
    this.voteForm.valueChanges.subscribe(val => {
        if (this.voteForm.status === "VALID" && this.answersArray.length >= 2) {
          this.voteDataService.changeMessage(val.question);
          this.voteDataService.changeAnswers(val.answers);
        }
    })
  }

  createAnswer(first:boolean) {
    if (first || this.f.answers.value.length <= 1){
      return this.formBuilder.control('', [Validators.maxLength(80), Validators.required]);
    } else {
      return this.formBuilder.control('', [Validators.maxLength(80)]);
    }
  }

  addAnswer(): void {
    this.answersArray.push(this.createAnswer(false));
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

  get f() { 
    return this.voteForm.controls; 
  }
  get answersArray(): FormArray {
	  return this.voteForm.get('answers') as FormArray;
  }

}
