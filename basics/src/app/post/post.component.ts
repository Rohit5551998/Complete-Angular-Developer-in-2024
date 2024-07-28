import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImg = "";

  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() is called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() is called', this.postImg);
  }

  ngOnChanges() {
    console.log('ngOnChanges() is called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() is called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() is called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() is called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() is called');
  }
}
