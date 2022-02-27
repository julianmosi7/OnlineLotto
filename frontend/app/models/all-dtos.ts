export class Reply {
  status: string;
  msg: string;
}

export class Rank {
  name: string;
  price: number;
}

export class User {
  userName: string;
  userId: number;
  password: string;
}

export class Win extends Reply {
  nr3: number;
  nr4: number;
  nr5: number;
  nr6: number;
  total: number;
}

export class TipAddReply extends Reply {
  roundId: number;
  tipId: number;
}

export class Ranks extends Reply {
  ranklist: Rank[];
}

export class LastRound extends Reply {
  roundId: number;
  started: string;
  finished: string;
  z1: number;
  z2: number;
  z3: number;
  z4: number;
  z5: number;
  z6: number;
}

export class CurrentRound extends Reply {
  //{"Status":"OK","RoundId":9,"Started":"09-12-2013 11:32:31","NrTips":0}
  roundId: number;
  started: string;
  nrTips: number;
  nrUsers: number;
  nrTipsForFullRound: number;
}




