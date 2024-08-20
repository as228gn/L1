const send = document.getElementById('send')
const input = document.getElementById('name')
const greeting = document.getElementById('greeting')
const picture = document.getElementById('picture')

function getName(){
  const nameInput = input.value
  greeting.textContent = 'Hello, ' + nameInput + ' here is a picture for you!'
  picture.src = 'https://picsum.photos/400/500?'
  input.value = ''
}

send.addEventListener('click', () => {
  getName()
})

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getName()
  }
})