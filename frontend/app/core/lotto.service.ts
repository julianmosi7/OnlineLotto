import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentRound, LastRound, Rank, Ranks, TipAddReply, Win } from '../models/all-dtos';

@Injectable({
  providedIn: 'root'
})
export class LottoService {
  url="http://www.club97.net/Lotto";

  constructor(private httpClient: HttpClient) { }

  addTipp(userId: number, pwd: string, z1: number, z2: number, z3: number, z4: number, z5: number, z6: number): Observable<TipAddReply>{
    return this.httpClient.post<TipAddReply>(`${this.url}/AddTip?userId=${userId}&pwd=${pwd}&z1=${z1}&z2=${z2}&z3=${z3}&z4=${z4}&z5=${z5}&z6=${z6}`, null)
  }

  getCurrentRound(): Observable<CurrentRound>{
    return this.httpClient.get<CurrentRound>(`${this.url}/GetCurrentRound`);
  }

  getLastDrawnRoundData(): Observable<LastRound>{
    return this.httpClient.get<LastRound>(`${this.url}/GetLastDrawnRoundData`);
  }

  getDrawnRoundData(roundId: number): Observable<LastRound>{
    return this.httpClient.get<LastRound>(`${this.url}/GetDrawnRoundData?roundId=${roundId}`);
  }

  getWinOfRoundForUser(userId: string, pwd: string, roundId: string): Observable<Win>{
    return this.httpClient.get<Win>(`${this.url}/GetWinOfRoundForUser?userId=${userId}&pwd=${pwd}&roundId=${roundId}`);
  }

  getWinsOfRound(roundId: number): Observable<Win>{
    return this.httpClient.get<Win>(`${this.url}/GetWinsOfRound?roundId=${roundId}`);
  }

  getWinsOfUser(userId: string, pwd: string): Observable<Win>{
    return this.httpClient.get<Win>(`${this.url}/GetWinsofUser?userId=${userId}&pwd=${pwd}`);
  }

  getRanklist(): Observable<Ranks>{
    return this.httpClient.get<Ranks>(`${this.url}/Ranklist`);
  }

}
