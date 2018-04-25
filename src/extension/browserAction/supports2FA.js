let more2faInfoButton = document.getElementById('more2faInfoButton');

more2faInfoButton.addEventListener('click', function () {
  var more2faInfo = document.getElementById('methods');
  if (more2faInfo.style.display === 'block') {
    more2faInfo.style.display = 'none';
  } else {
    more2faInfo.style.display = 'block';
  }
});