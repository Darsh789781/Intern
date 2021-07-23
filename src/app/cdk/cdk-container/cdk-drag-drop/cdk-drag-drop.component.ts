import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-drag-drop',
  templateUrl: './cdk-drag-drop.component.html',
  styleUrls: ['./cdk-drag-drop.component.scss']
})
export class CdkDragDropComponent  {

  constructor() { }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Walk Dog',
    'Stretch',
    'Code Stuff',
    'Drag Stuff',
    'Drop Stuff',
    'Run',
    'Walk'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  

  public drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  } 
}
