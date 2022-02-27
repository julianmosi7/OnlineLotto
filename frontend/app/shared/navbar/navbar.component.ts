import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {}

  navigateTo(page: string): void {
    console.log(page);
    this.router.navigateByUrl(`/${page}`);
  }
}
