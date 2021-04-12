document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#rooms div p');
    const forms = document.form;

    //search bar
    const searchBar = forms['search-rooms'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toUpperCase();
      const rooms = list.getElementsByTagName('p');
      Array.from(rooms).forEach((room) => {
        const title = room.firstElementChild.textContent;
        if(title.toUpperCase().indexOf(e.target.value) != -1){
          room.style.display = 'block';
        } else {
          room.style.display = 'none';
        }
      });
    });
})