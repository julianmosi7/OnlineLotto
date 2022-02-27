import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LottoService } from '../core/lotto.service';
import { StorageService } from '../core/storage.service';
import { User } from '../models/all-dtos';

@Component({
  selector: 'app-tipentry',
  templateUrl: './tipentry.page.html',
  styleUrls: ['./tipentry.page.scss'],
})
export class TipentryPage implements OnInit {
  user: User;

  entry_list = [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ];

  isNull: boolean = false;

  entry_one: number;
  entry_two: number;
  entry_three: number;
  entry_four: number;
  entry_five: number;
  entry_six: number;

  constructor(private lottoService: LottoService, private storageService: StorageService, public toastController: ToastController) {}

  ngOnInit() {}

  sendTip(): void {
    var user = this.storageService.get('currentUser');
    console.log(user.then(x => {
      this.user = {userName: x.userName, userId: x.userId, password: x.password};
      console.log(this.user);
    }).catch(x => this.presentToast('No user logged in!')));

    this.isNull = false;
    for (let index = 0; index < this.entry_list.length; index++) {
      if (this.entry_list[index].value == null || this.entry_list[index].value == 0) {
        this.isNull = true;
      }
    }

    if (!this.isNull) {
      this.entry_one = this.entry_list[0].value;
      this.entry_two = this.entry_list[1].value;
      this.entry_three = this.entry_list[2].value;
      this.entry_four = this.entry_list[3].value;
      this.entry_five = this.entry_list[4].value;
      this.entry_six = this.entry_list[5].value;
      this.lottoService
        .addTipp(
          this.user.userId,
          this.user.password,
          this.entry_one,
          this.entry_two,
          this.entry_three,
          this.entry_four,
          this.entry_five,
          this.entry_six
        )
        .subscribe((x) => {
          console.log(x);
          this.presentToast(x.msg);
        });
    } else {
      console.log('enter more numbers!');
    }
  }

  generateRandomTips(): void {
    this.entry_list.forEach(x => x.value = this.generateRandomNumber());
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 50 + 1);
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
