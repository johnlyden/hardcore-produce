(function() {

  class LeaderBoard {
    constructor() {
      this.poller = new window.spredfast.Poller();
      this.init();
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
      })
    }


  }

  const board = new LeaderBoard();

})();