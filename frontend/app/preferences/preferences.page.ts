import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../core/storage.service';
import { User } from '../models/all-dtos';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  userName: string = '';
  userId: number = null;
  password: string = '';
  user: User;

  constructor(private storageService: StorageService, public toastController: ToastController) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

  }

  login(): void{
    console.log(this.storageService);

    this.user = {userName: this.userName, userId: this.userId, password: this.password}
    
    if(this.user){
      this.storageService.set('currentUser', this.user);
      this.presentToast(`User ${this.user.userName} | ${this.user.userId} logged in`)
    }
  }

  logout(): void{
    this.storageService.get('currentUser').then((x) => {
      if(x != null){
        this.storageService.remove('currentUser');
        this.presentToast(`User ${this.user.userName} | ${this.user.userId} logged out`)
      }else{
        this.presentToast(`No User logged in`)
      }
    });
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
