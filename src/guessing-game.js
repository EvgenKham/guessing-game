class GuessingGame {
    constructor() {
        this.value = null;
        this.left = 0;
        this.right = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.value = Math.ceil(this.left + ((this.right - this.left) / 2));
        return this.value;
    }

    lower() {
        // this.left;
        this.right = this.value;
    }

    greater() {
        this.left = this.value;
        // this.right;
    }
}

module.exports = GuessingGame;
