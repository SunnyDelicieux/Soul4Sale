function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  if (id === 'file_rituel') document.getElementById('ritual-box').style.display = 'block';
}
function enterAdmin() {
  const code = prompt('Enter admin password:');
  if (code === '321436') {
    alert('Admin access granted.');
    document.getElementById('maison-benie').style.display = 'list-item';
  } else {
    alert('Access denied.');
  }
}
function startRitual() {
  document.getElementById('chatbox').style.display = 'block';
}
function submitMemory() {
  document.getElementById('chatbox').style.display = 'none';
  document.getElementById('ritual-confirmation').style.display = 'block';
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('done').style.display = 'block';
  }, 3000);
}
function loadFile(filename) {
  if (filename === 'file_rituel') {
    showSection('ritual-box');
  } else {
    alert('Loading: ' + filename);
  }
}
