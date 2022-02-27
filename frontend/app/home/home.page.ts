import { Component } from '@angular/core';
import { LottoService } from '../core/lotto.service';
import { StorageService } from '../core/storage.service';
import { CurrentRound, LastRound, User } from '../models/all-dtos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lastRound: LastRound = {
    roundId: 0,
    started: '',
    finished: '',
    z1: 0,
    z2: 0,
    z3: 0,
    z4: 0,
    z5: 0,
    z6: 0,
    status: '',
    msg: '',
  };
  currentRound: CurrentRound = {
    roundId: 0,
    started: '',
    nrTips: 0,
    nrUsers: 0,
    nrTipsForFullRound: 0,
    status: '',
    msg: '',
  };
  currentUser: User = {userName: '', userId: null, password: ''} 

  constructor(
    private lottoService: LottoService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.lottoService.getLastDrawnRoundData().subscribe((x) => {
      this.lastRound = x;
      console.log(this.lastRound);
      this.lottoService.getCurrentRound().subscribe((x) => {
        this.currentRound = x;
        console.log(this.currentRound);
        this.storageService.get('currentUser').then((x) => {
          this.currentUser = x;
        });
      });
    });
  }
}
