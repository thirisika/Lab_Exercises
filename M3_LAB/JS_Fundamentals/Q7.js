const basketballGame = {
    score: 0,
    foul:0,

    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },

    threePointer() {
    this.score += 3;
    return this;
    },

    fouls(){
        this.foul++;
        return this;
    },

    halfTime() {
    console.log('Halftime score is '+this.score + ' Halftime foul is '+this.foul);
    return this;
    },

    fullTime() {
        console.log('Fulltime score is '+this.score +  ' Fulltime foul is '+this.foul);
        return this;
        }
   

    }
    //modify each of the above object methods to enable function chaining as below:
    //basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fouls().halfTime().fouls().fullTime();

//     basketballGame
//   .threePointer()
//   .threePointer()
//   .fouls()
//   .fouls()
//   .basket()
//   .halfTime()
//   .freeThrow()
//   .threePointer()
//   .fouls()
//   .fullTime();


basketballGame
  .basket()
  .basket()
  .fouls()
  .freeThrow()
  .halfTime()
  .fouls()
  .fouls()
  .threePointer()
  .threePointer()
  .fullTime();