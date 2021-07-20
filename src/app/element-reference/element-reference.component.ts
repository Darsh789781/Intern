import { Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-reference',
  templateUrl: './element-reference.component.html',
  styleUrls: ['./element-reference.component.scss']
})
export class ElementReferenceComponent implements OnInit {

  constructor(private renderer:Renderer2) { }
  @ViewChild('change') change:ElementRef
  @ViewChild('el', { static: false })

  el!: ElementRef;

  title = 'Elementref';
  
  public click()
  {
     this.change.nativeElement.style.background = 'yellow';
  }
  
  ngAfterViewInit(){
    this.renderer.addClass(this.el.nativeElement,'mystyle');
  }
  public myFunction() {
    this.renderer.removeClass(this.el.nativeElement,'mystyle');
  }

  ngOnInit(): void {
  }
 
}
