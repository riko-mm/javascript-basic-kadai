const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const text = document.querySelector('h2');
  text.textContent = 'ボタンをクリックしました';
});