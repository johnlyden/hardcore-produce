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
        this.updateLeaderBoard(resp);
      })
    }
    /**
     * 
     * @param { Array } scores 
     */
    updateLeaderBoard(scores) {
      
      let htmlString = '';
      const sortedScores = scores.sort( (a, b) => {
        return parseFloat(b.count) - parseFloat(a.count)
      });

      sortedScores.map( (score) => {
        htmlString += `<li class="score-card animated slideInLeft"><span class="name">${score.name}</span><span class="score pull-right">${score.count} Mentions</span></li>`;
      });

      this.leaderBoard.innerHTML = htmlString;
    } 

  }

  const board = new LeaderBoard();

})();