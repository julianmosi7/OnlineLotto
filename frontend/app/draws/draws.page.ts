import { Component, OnInit } from '@angular/core';
import { LottoService } from '../core/lotto.service';
import { LastRound, Win } from '../models/all-dtos';

@Component({
  selector: 'app-draws',
  templateUrl: './draws.page.html',
  styleUrls: ['./draws.page.scss'],
})
export class DrawsPage implements OnInit {
  draws: any[] = [];
  rounds: LastRound[] = [];
  wins: Win[] = [];

  constructor(private lottoService: LottoService) { }

  ngOnInit() {
    this.lottoService.getCurrentRound().subscribe(x => {
      for (let index = 0; index < x.roundId; index++) {
        this.lottoService.getDrawnRoundData(index).subscribe(y => {
          this.lottoService.getWinsOfRound(index).subscribe(z => {
            if(z && y){
              this.draws.push({round: y, win: z})
            }
            
          })
        })
      }
      
    })
    
  }

}
