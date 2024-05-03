import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class FeedComponent implements OnInit {
  constructor() {}
  feeds = [
    {
      name: 'Abebe Kebede',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      checklist: ['Orthodox', 'Football', 'Apartment', 'Walks'],
      city: 'Addis Ababa',
      area: 'Bole',
    },
  ];
  ngOnInit() {}
}
