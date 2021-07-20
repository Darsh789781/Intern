import { Component, OnInit } from '@angular/core';
import { ProfilehostService } from '../profilehost.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  constructor(private profileService: ProfilehostService) { }

  ngOnInit(): void {
  }
  public logout() {
    this.profileService.logout();
  }
}
