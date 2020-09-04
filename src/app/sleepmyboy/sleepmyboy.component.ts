import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleepmyboy',
  templateUrl: './sleepmyboy.component.html',
  styleUrls: ['./sleepmyboy.component.css']
})
export class SleepmyboyComponent implements OnInit {

  constructor() { }

  callForSleep(): void{
    console.log("it mattered")
  }
  ngOnInit(): void {
  }

}
