import { Component, OnInit } from '@angular/core';
import { LottoService } from '../core/lotto.service';
import { StorageService } from '../core/storage.service';
import { Win } from '../models/all-dtos';

@Component({
  selector: 'app-win',
  templateUrl: './win.page.html',
  styleUrls: ['./win.page.scss'],
})
export class WinPage implements OnInit {
  wins: number[] = [];
  win: Win = {nr3: 0, nr4: 0, nr5: 0, nr6: 0, total: 0, status: '', msg: ''};

  constructor(private lottoService: LottoService, private storageService: StorageService) { }

  ngOnInit() {
    
  }

  load(): void{
    this.storageService.get('currentUser').then(x => {
      this.wins = [];
      if(x != null){
        this.lottoService.getWinsOfUser(x.userId, x.password).subscribe(y => {
          this.wins.push(y.nr3);
          this.wins.push(y.nr4);
          this.wins.push(y.nr5);
          this.wins.push(y.nr6);
          this.win = y;
        });
      }
    });
  }

}
