class GuessingGame {
    constructor(min = 0, max = 0) {
      this.min = min;
      this.max = max;
    }

    setRange(min, max) {
      this.min = min + 1;
      this.max = max;
    }

    guess() {
      return Math.ceil(this.min + ((this.max-this.min)/2));
    }

    lower() {
      this.max = Math.ceil(this.min + (this.max - this.min)/2) - 1;
    }

    greater() {
      this.min = Math.ceil(this.min + (this.max - this.min)/2) + 1;
    }
}

module.exports = GuessingGame;
