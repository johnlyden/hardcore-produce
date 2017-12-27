(function() {

  /** class representing the leaderboard  */
  class LeaderBoard {
    constructor() {
      // create new instance of poller
      this.poller = new window.spredfast.Poller();
      this.leaderBoard = document.getElementById('leaderBoard');
      this.init();
    }

    /**
     * initialize the leaderboard
     */
    init() {
      this.setPolling(15000);
      this.requestUpdate();
    }

    /**
     * set interval to start polling the API
     * @param {number} interval 
     */
    setPolling(interval) {
      setInterval( () => {
        this.requestUpdate();
      }, interval);
    }

    /**
     * call the poll method and handle response
     */
    requestUpdate() {
      this.poller.poll().then( (resp) => {
        this.updateLeaderBoard(resp);
      })
    }

    /**
     * Iterates through scores, creates HTML and injects into DOM
     * @param { Array } scores 
     */
    updateLeaderBoard(scores) {
      let htmlString = '';

      const sortedScores = scores.sort( (a, b) => {
        return parseFloat(b.count) - parseFloat(a.count)
      });

      sortedScores.map( (score) => {
        htmlString += `<li class="score-card animated flipInX"><span class="name">${score.name}</span><span class="score pull-right">${score.count} <span class="mention">Mentions</span></span></li>`;
      });

      this.leaderBoard.innerHTML = htmlString;
    } 

  }
  const board = new LeaderBoard();
})();