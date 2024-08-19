const send = document.getElementById('send')
const input = document.getElementById('name')
const greeting = document.getElementById('greeting')
const picture = document.getElementById('picture')

send.addEventListener('click', () => {
  const nameInput = input.value
  greeting.textContent = 'Hello, ' + nameInput + ' here is your picture!'
  picture.src = 'https://picsum.photos/400/500?'
  input.value = ''
})

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const nameInput = input.value
    greeting.textContent = 'Hello, ' + nameInput + ' here is your picture!'
    picture.src = 'https://picsum.photos/400/500?'
    input.value = ''
  }
})