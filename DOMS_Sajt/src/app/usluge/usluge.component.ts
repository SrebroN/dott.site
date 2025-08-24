import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usluge',
  imports: [CommonModule,TranslateModule],
  templateUrl: './usluge.component.html',
  styleUrl: './usluge.component.css',
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease'))
    ])
  ]
})
export class UslugeComponent {
  items = [
    {
      question: "Q1.QUESTION1",
      answer:"Q1.ANSWER1"
    },
    {
      question: "Q2.QUESTION2",
      answer:"Q2.ANSWER2"
    },
    {
      question: "Q3.QUESTION3",
      answer:"Q3.ANSWER3"
    },
    {
      question: "Q4.QUESTION4",
      answer:"Q4.ANSWER4"
    },    {
      question: "Q5.QUESTION5",
      answer:"Q5.ANSWER5"
    },    {
      question: "Q6.QUESTION6",
      answer:"Q6.ANSWER6"
    },    {
      question: "Q7.QUESTION7",
      answer:"Q7.ANSWER7"
    },
  ]
  items2 = [
      {
      question: "Q21.QUESTION21",
      answer:"Q21.ANSWER21"
    },
    {
      question: "Q22.QUESTION22",
      answer:"Q22.ANSWER22"
    },
    {
      question: "Q23.QUESTION23",
      answer:"Q23.ANSWER23"
    },
    {
      question: "Q24.QUESTION24",
      answer:"Q24.ANSWER24"
    },    {
      question: "Q25.QUESTION25",
      answer:"Q25.ANSWER25"
    }
  ]
  activeIndex: number | null = null;
  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  activeIndex2: number | null = null;
  toggle2(index2: number): void {
    this.activeIndex2 = this.activeIndex2 === index2 ? null : index2;
  }
}
