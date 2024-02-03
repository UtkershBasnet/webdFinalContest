const likes = document.querySelectorAll('.like');

likes.forEach(like => {
  like.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);

    like.setAttribute('style', 'background-color: red;');
  });
});
