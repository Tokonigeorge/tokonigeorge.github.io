//const menuBtn = document.querySelector('.menu-btn');
//let menuOpen = false;
//menuBtn.addEventListener('click', () => {
  //  if(!menuOpen) {
    //    menuBtn.classList.add('open');
      //  menuOpen = true;
    //} else{
      //  menuBtn.classList.remove('open');
        //menuOpen = false7
    //}
//}

//);

(function () {
 var button = document.getElementById('toggle-menu');
 button.addEventListener('click', function(event) {
 event.preventDefault();
 var menu = document.getElementById('main-menu');
 menu.classList.toggle('is-open');
 });
})();
