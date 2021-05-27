class StatisticsClass {
constructor(){
    this.gameResults = [];
}
addGameStatistics(win, bid){
    let resultOfGame = {
        win: win,
        bid: bid
    }
    this.gameResults.push(resultOfGame);
}
showStats(){
    let counterOfGames = this.gameResults.length;
    let counterOfWins = this.gameResults.filter(result => result.win).length;
    let counterOfLosses = this.gameResults.filter(result => !result.win).length;
    return [counterOfGames, counterOfWins, counterOfLosses]
}
}

//const statistics = new StatisticsClass()
