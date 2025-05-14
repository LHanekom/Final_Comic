window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;

  const introduction = document.querySelector('#introduction_container');
  const introductionHeight = introduction.getBoundingClientRect().top;
  
  if (introductionHeight < windowHeight * 0.25) {
    introduction.classList.add('visible');
  } else {
    introduction.classList.remove('visible');
  }

  const infographic = document.querySelector('#infographic_container');
  const infographicHeight = infographic.getBoundingClientRect().top;

  if (infographicHeight < windowHeight * 0.65) {
    infographic.classList.add('visible');
  } else {
    infographic.classList.remove('visible');
  }

  const begin = document.querySelector('#begin_container');
  const beginHeight = begin.getBoundingClientRect().top;

  if (beginHeight < windowHeight * 0.25) {
    begin.classList.add('visible');
  } else {
    begin.classList.remove('visible');
  }

  const comic = document.querySelector('#comic_container');
  const comicHeight = comic.getBoundingClientRect().top;

  if (comicHeight < windowHeight * 0.65) {
    comic.classList.add('visible');
  } else {
    comic.classList.remove('visible');
  }

  const end = document.querySelector('#end_container');
  const endHeight = end.getBoundingClientRect().top;

  if (endHeight < windowHeight * 0.25) {
    end.classList.add('visible');
  } else {
    end.classList.remove('visible');
  }

  const author = document.querySelector('#author_container');
  const authorHeight = author.getBoundingClientRect().top;

  if (authorHeight < windowHeight * 0.65) {
    author.classList.add('visible');
  } else {
    author.classList.remove('visible');
  }


});