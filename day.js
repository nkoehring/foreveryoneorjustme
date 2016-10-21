function isItTheDay (day, msg) {
  const el = document.getElementById('msg')
  const el2 = document.getElementById('sorry')

  if ((new Date()).getDay() === day) {
    el.className = 'bad'
    el.innerText = msg.good
    el2.innerText = msg.sorry
  } else {
    el.className = 'good'
    el.innerText = msg.bad
    el2.innerText = '' 
  }
}
