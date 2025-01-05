<template>
    <div id="app">
      <header>
        <img class="logo" src="img/TDA-logo2.png" alt="TDA-logo">
        <h1>Piškvorky</h1>
      </header>
      <main>
        <div class="container">
          <div class="board">
            <div v-for="(row, rowIndex) in board" :key="rowIndex">
              <div
                v-for="(cell, colIndex) in row" 
                :key="colIndex" 
                class="cell"
                @click="handleCellClick(rowIndex, colIndex)"
              >
                <img v-if="cell" :src="cell === 'X' ? 'img/X_cervene.png' : 'img/O_modre.png'" :alt="cell" class="player-image" />
              </div>
            </div>
          </div>
          <button @click="resetGame" class="reset-button">Restartovat hru</button>
          <div class="game-status">{{ gameStatus }}</div>
        </div>
      </main>
      <footer>
        <img src="img/TDA-logo3.png" alt="logo">
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boardSize: 15,
        currentPlayer: 'X',
        board: [],
        gameStatus: 'Hra začala! X začíná!'
      };
    },
    methods: {
      createBoard() {
        this.board = Array.from({ length: this.boardSize }, () => Array(this.boardSize).fill(null));
      },
      handleCellClick(row, col) {
        if (this.board[row][col] || this.gameStatus.includes('vyhrál') || this.gameStatus.includes('remíza')) return;
  
        this.board[row][col] = this.currentPlayer;
  
        if (this.checkWinner(row, col)) {
          this.gameStatus = `Hráč ${this.currentPlayer} vyhrál!`;
        } else if (this.board.flat().every(cell => cell)) {
          this.gameStatus = 'Je to remíza!';
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
          this.gameStatus = `${this.currentPlayer} je na řadě!`;
        }
      },
      checkWinner(row, col) {
        const directions = [
          [0, 1], [1, 0], [1, 1], [1, -1]
        ];
  
        for (const [dx, dy] of directions) {
          let count = 1;
  
          for (let i = 1; i < 5; i++) {
            const newRow = row + i * dx;
            const newCol = col + i * dy;
            if (
              newRow >= 0 && newRow < this.boardSize &&
              newCol >= 0 && newCol < this.boardSize &&
              this.board[newRow][newCol] === this.currentPlayer
            ) {
              count++;
            } else {
              break;
            }
          }
  
          for (let i = 1; i < 5; i++) {
            const newRow = row - i * dx;
            const newCol = col - i * dy;
            if (
              newRow >= 0 && newRow < this.boardSize &&
              newCol >= 0 && newCol < this.boardSize &&
              this.board[newRow][newCol] === this.currentPlayer
            ) {
              count++;
            } else {
              break;
            }
          }
  
          if (count >= 5) return true;
        }
        return false;
      },
      resetGame() {
        this.createBoard();
        this.currentPlayer = 'X';
        this.gameStatus = 'Hra začala! X začíná!';
      }
    },
    mounted() {
      this.createBoard();
    }
  };
  </script>
  
  <style setup scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Dosis';
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #F6F6F6;
  }
  header {
    background: #0070BB;
    color: white;
    width: 100%;
    padding: 25px 0 68px 0;
    text-align: center;
  }
  header h1 {
    font-size: 2.5rem;
    margin-top: 20px;
  }
  header .logo {
    width: 350px;
    height: 130px;
    margin-bottom: 20px;
  }
  .container {
    text-align: center;
    max-width: 600px;
    width: 100%;
  }
  .board {
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    gap: 5px;
    width: 500px; 
    height: 500px;
    margin: 50px auto;
    border: 10px solid #0070BB;
  }
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .cell:hover {
    background-color: #f1f1f1;
  }
  .reset-button {
    padding: 10px 20px;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    background-color: #E31837;
    color: white;
    border: none;
    border-radius: 5px;
    font-family: 'Dosis';
  }
  .reset-button:hover {
    background-color: #D20726;
  }
  .game-status {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  footer {
    width: 100%;
    background-color: #ffffff;
    margin-top: 50px;
    box-shadow: 0 -6px 10px -2px rgba(0, 0, 0, .3);
    padding: 25px 50px;
  }
  footer img {
    height: 10vh;
  }
  footer hr {
    height: 2px;
    background-color: black;
    filter: blur(5px);
  }
  .player-image {
    width: 1rem;
  }
  </style>
  
