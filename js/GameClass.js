class GameClass {
  constructor(start) {
    this.stats = new StatisticsClass();
    this.wallet = new WalletClass(start);

    document
      .getElementById("start")
      .addEventListener("click", this.start.bind(this));
    this.walletSpan = document.querySelector("span.wallet");
    this.colorBoards = [...document.querySelectorAll("div.color")];
    this.bidInput = document.getElementById("bid");
    this.resultSpan = document.querySelector(".score .result");
    this.gamesSpan = document.querySelector(".score .number");
    this.winsSpan = document.querySelector(".score .win");
    this.loseSpan = document.querySelector(".score .loss");

    this.render();
  }
  render(
    colors = ["gray", "gray", "gray"],
    money = this.wallet.getValueOfWallet(),
    result = "",
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.colorBoards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    });

    this.walletSpan.textContent = money;
    if (result) {
      result = `You won $ ${wonMoney} `;
    } else if (!result && result !== "") {
      result = `You have lost $ ${bid} `;
     
    }
    this.resultSpan.textContent = result;
    this.gamesSpan.textContent = stats[0];
    this.winsSpan.textContent = stats[1];
    this.loseSpan.textContent = stats[2];

    this.bidInput.value = "";
  }

  start() {
    if (this.bidInput.value < 1)
      return alert("The amount, you want to play is too small!");

    const bid = Math.floor(this.bidInput.value);
   
    if (!this.wallet.checkCanPlay(bid)) {
      return alert("You have insufficient funds in your account.");
    }

    this.wallet.changeWallet(bid, "-");

    this.draw = new DrawClass();
    const colors = this.draw.getDrawResult();
    const win = ResultClass.checkValue(colors);
    const moneyWon = ResultClass.moneyWin(win, bid);

    this.wallet.changeWallet(moneyWon);

    this.stats.addGameStatistics(win, bid);

    this.render(
      colors,
      this.wallet.getValueOfWallet(),
      win,
      this.stats.showStats(),
      bid,
      moneyWon
    );
  }
}
