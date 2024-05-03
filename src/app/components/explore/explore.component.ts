import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ExploreComponent implements OnInit {
  constructor() {}
  priceRange = signal({
    lower: 1500,
    upper: 4500,
  });

  optionList = [
    'Muslim',
    'Christian',
    'Sport',
    'Intellect',
    'Student',
    'Employee',
    'non-alcoholic',
    'Ethiopian',
    'Eritrean',
  ];

  ngOnInit() {
    console.log('');
  }

  rangeChange(event) {
    console.log(event.detail.value);

    this.priceRange.set(event.detail.value);
  }

  submit() {}
}
