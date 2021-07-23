import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-virtual-scroll-presentation',
  templateUrl: './cdk-virtual-scroll-presentation.component.html',
  styleUrls: ['./cdk-virtual-scroll-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkVirtualScrollPresentationComponent implements OnInit {
  items= Array.from({ length: 100 }).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

}
