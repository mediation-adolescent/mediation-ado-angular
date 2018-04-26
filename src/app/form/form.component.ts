import { Component, OnInit } from '@angular/core';
import * as data from './data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  questions: any = [];
  results = { mediation: 0, counsel: 0, therapy: 0 };
  contacts = [];
  calculated = false;
  started = false;

  constructor() {
    this.questions = data.questions;
  }

  ngOnInit() {
  }

  reverseChecked(question, response) {
    this.calculated = false;

    this.questions.find(q => q.question === question.question).responses.map(r => {
      r.checked = r.response === response.response;
    });
  }

  calculate() {
    this.contacts = [];
    this.calculated = true;
    this.results = { mediation: 0, counsel: 0, therapy: 0 };

    this.questions.forEach(q => {
      q.responses.forEach(r => {
        if (r.checked) {
          this.results.mediation += r.points.mediation;
          this.results.counsel += r.points.counsel;
          this.results.therapy += r.points.therapy;
        }
      });
    });

    let topValue = 0;
    Object.keys(this.results).forEach(key => {
      if (this.results[key] >= topValue) {
        topValue = this.results[key];
      }
    });

    Object.keys(this.results).forEach(key => {
      if (this.results[key] >= topValue - topValue * 0.3) {
        this.contacts.push(key);
      }
    });
  }

  contains(str): boolean {
    return this.contacts.indexOf(str) > -1;
  }

}
