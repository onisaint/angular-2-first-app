import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  text = "hello therre"
  date = new Date();

  items = ['aaskdasd', 'madhu' , 'slakjdmad', 'asdkjlasd'];
  constructor() { }

  ngOnInit() {
  }

}
