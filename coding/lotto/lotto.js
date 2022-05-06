function randomLottoTicket() {
  let randomArray = [];

  for (let i = 0; i < 6; i++) {
    randomArray.push(Math.random({ min: 0, max: 49 }));
  }
  return randomArray;
}
