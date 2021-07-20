import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { ProfilehostDirective } from '../profilehost.directive';
import { ProfilehostService } from '../profilehost.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(ProfilehostDirective, { static: true })
  profileHost!: ProfilehostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfilehostService) {}

  ngOnInit(): void {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap((isLoggedIn) =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
