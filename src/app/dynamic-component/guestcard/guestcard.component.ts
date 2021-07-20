import { Component, OnInit } from '@angular/core';
import { ProfilehostService } from '../profilehost.service';

@Component({
  selector: 'app-guestcard',
  templateUrl: './guestcard.component.html',
  styleUrls: ['./guestcard.component.scss']
})
export class GuestcardComponent implements OnInit {

  constructor(private profileService: ProfilehostService) { }

  ngOnInit(): void {
  }
  public login() {
    this.profileService.login();
  }
}
