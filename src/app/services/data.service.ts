import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
    /*this.questions = [
      {
        text:'What is your name?',
        answer: 'My name is David',
        hide:true
      },
      {
        text:'What is your favorite color?',
        answer:'My favorite color is blue',
        hide:true
      },
      {
        text: 'What is your favorite food?',
        answer: 'My favorite food is pizza!!!!!',
        hide:true
      }
    ];
    */
   }


  // Get Questions from Local Storage
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
        this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  
  // Add Question to Local Storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    // Init local var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      // Push New Question
      questions.unshift(question);
      // Set New Array to Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add New Question
      questions.unshift(question);
      // Reset Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove Question from Local Storage
  removeQuestion(question:Question){
    for(let i = 0;i < this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
