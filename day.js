function setMessage (date) {
  const el = document.getElementById('msg')
  const el2 = document.getElementById('sorry')
  const config = window.config
  const itIsTheDay = date.getDay() === config.day

  const good = (itIsTheDay && !config.sorryIf) || (!itIsTheDay && config.sorryIf)

  el.innerText = ''
  el2.innerText = ''

  if (good) {
    el.className = 'good'
    el.innerText = config.messages.good
  } else {
    el.className = 'bad'
    el.innerText = config.messages.bad
    el2.innerText = config.messages.sorry
  }
}

function apiCallback (json) {
  let date = new Date()

  if (json && json.dateString) {
    date = new Date(json.dateString)
  }

  setMessage(date)
}

window.apiCallback = apiCallback
