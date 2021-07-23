import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-overlay-presentation',
  templateUrl: './cdk-overlay-presentation.component.html',
  styleUrls: ['./cdk-overlay-presentation.component.scss']
})
export class CdkOverlayPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = false;

}
