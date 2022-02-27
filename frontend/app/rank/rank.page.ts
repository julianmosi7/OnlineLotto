import { Component, OnInit } from '@angular/core';
import { LottoService } from '../core/lotto.service';
import { Rank, Ranks } from '../models/all-dtos';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {
  ranks: Ranks = {ranklist: [{name: '', price: 0}], status: '', msg: ''};

  constructor(private lottoService: LottoService) {}

  ngOnInit() {
    this.lottoService.getRanklist().subscribe(x => {
      this.ranks = x;
      console.log(this.ranks.ranklist)
    });
  }

}
