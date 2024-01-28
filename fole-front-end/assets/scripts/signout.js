
function clearUserData() {
    localStorage.removeItem('A');
    localStorage.removeItem('B');
    localStorage.removeItem('C'); 
  }
  
  function preventBackNavigation() {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
  
  
  document.getElementById('sign-out-button').addEventListener('click', function() {
    clearUserData();
    window.location.href = 'login.html';
    preventBackNavigation();
  });