(function() {

  class LeaderBoard {
    constructor() {
      this.poller = new window.spredfast.Poller();
      this.init();
      this.leaderBoard = document.getElementById('leaderBoard');
    }

    init() {
      this.setPolling();
    }

    setPolling() {
      setInterval( () => {
        this.requestUpdate();
      }, 3000);
    }

    requestUpdate() {
      this.poller.poll().then( (resp) => {
        console.log(resp);
        this.updateLeaderBoard(resp);
      })
    }
    /**
     * 
     * @param { Array } scores 
     */
    updateLeaderBoard(scores) {
      let htmlString = ''
      scores.map( (score) => {
        htmlString += `<li class="score-card"><span class="name">${score.name}</span><span class="score pull-right">${score.count} Mentions</span></li>`;
      });
      console.log(htmlString);
      this.leaderBoard.innerHTML = htmlString;
    }

  }

  const board = new LeaderBoard();

})();