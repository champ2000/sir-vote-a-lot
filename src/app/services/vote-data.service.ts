import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteDataService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  public answers = new Subject<string[]>();
  public results = new Subject<string[]>();
  private _results = [];

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changeAnswers (answers: string[]){
    this.answers.next(answers);
  }

  changeResults (results: string){
    this._results.push(results);
    this.results.next(this._results);
  }

  resetVotes () {
    this._results = [];
    this.results.next([]);
  }
}
