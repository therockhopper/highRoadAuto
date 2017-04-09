import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'pc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.config.forEach( path => {
      console.log(path.path)
    })
  }

}
