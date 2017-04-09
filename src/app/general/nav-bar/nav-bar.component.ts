import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  openHamburger: boolean
  hamburgerMenu: any
  navBar: any

  constructor() { }

  ngOnInit() {
    this.navBar = document.getElementById('navBar')
    window.addEventListener('scroll', (e) => {
      this.updateNavBackground()
    })
  }

  updateNavBackground(): void {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body).scrollTop
    if (scrollTop > 0) {
      this.navBar.classList.add('color-background')
    } else {
      this.navBar.classList.remove('color-background')
    }
  }

  /**
   *  Toggle the Hamburger state, if not state is given then flip the state
   */
  toggleHamburger(state: boolean = !this.openHamburger): void {
    this.openHamburger = state
  }

}
