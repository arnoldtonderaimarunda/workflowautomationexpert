
fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').then(() => {
  document.getElementsByClassName('message')[0].innerHTML = '';
  document.getElementsByClassName('message')[0].classList.add('no-ab');
}) .catch(() => {
  document.getElementsByClassName('message')[0].innerHTML = 'Adblock detected! This may affect presentation of this list.';
  document.getElementsByClassName('message')[0].classList.add('ab');
});
