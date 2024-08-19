const send = document.getElementById('send')
const input = document.getElementById('name')
const greeting = document.getElementById('greeting')

send.addEventListener('click', () => {
  const nameInput = input.value
  greeting.textContent = 'Hej, ' + nameInput + '!'
})