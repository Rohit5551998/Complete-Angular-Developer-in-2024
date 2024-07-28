import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input('img') postImg = "";

  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() is called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() is called', this.postImg);
  }
}
