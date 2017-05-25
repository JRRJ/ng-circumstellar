import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbits',
  templateUrl: './orbits.component.html',
  styleUrls: ['./orbits.component.css']
})
export class OrbitsComponent implements OnInit {
  m1: number = 1;
  m2: number = 1;
  ecc: number = 0;
  sum: number;

  r1: number;
  r2: number;
  rcb: number;

  com: number;

  constructor() { }

  ngOnInit() {
    this.recalc();
  }

  recalc() {
    const rEggleton = (q:number):number => {
      return (0.49 * (q ** (2/3)))/
      ((0.6 * (q ** (2/3))) + Math.log(
        1 + (q ** (1/3))
      )) * (0.733*((1-this.ecc)**1.2) * (q ** (0.07)))
    };
    this.sum = this.m1 + this.m2; 
    this.r1 = rEggleton(this.m1/this.m2);
    this.r2 = rEggleton(this.m2/this.m1);

    let q = 0;
    if(this.m1 > this.m2){
      q = this.m2/(this.m1+this.m2)
    } else {
      q = this.m2/(this.m1+this.m2)
    }
    this.rcb = 1.93 * ((q*(1-q)) ** 0.043) * (1+(1.01*(this.ecc ** 0.32)))

    this.com = 300 + (50 * this.m2/(this.m1+this.m2)) - (50 * this.m1/(this.m1+this.m2))
  }

}
