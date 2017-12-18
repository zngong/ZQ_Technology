import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zq-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = false;//默认展开菜单
  constructor() { }

  ngOnInit() {
  }

}
