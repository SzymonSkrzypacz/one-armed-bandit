class WalletClass {
  constructor(money) {
    let _monay = monay;

    this.getValueOfWallet = () => _monay;

    this.checkCanPlay = (value) => {
      if (_monay >= value) return true;
      return false;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_monay += value);
        } else if (type === "-") {
          return (_monay -= value);
        }
      } else {
        throw new Error("That is not a number!");
      }
    };
  }
}

//const wallet = new walletClass(100);
