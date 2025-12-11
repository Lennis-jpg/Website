// Prevent back navigation
    function preventBackButton() {
      history.pushState(null, null, location.href);
      window.onpopstate = function () {
        history.go(1);
      };
    }
    preventBackButton();

  //Prevent back navigation
  history.pushState(null, null, location.href);
  
    window.addEventListener('popstate', function () {
    history.pushState(null, null, location.href); 
  }); 
