// code your solution here
function superbowlWin(record) {
    const winYear = record.find(game => game.result === "W");

    return winYear ? winYear.year : undefined;
}
