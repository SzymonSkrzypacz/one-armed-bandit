class ResultClass {
  static moneyWin(result, bid) {
    if (result) return 5 * bid;
    else return 0;
  }
  static checkValue(draw){
      if(draw[0]===draw[1] && draw[1]===draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
      else return false;
  }
}

