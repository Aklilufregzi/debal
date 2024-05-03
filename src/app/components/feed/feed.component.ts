import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class FeedComponent implements OnInit {
  userService = inject(UserService);
  constructor() {}
  feeds;
  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);
      this.feeds = data;
    });
  }
}
