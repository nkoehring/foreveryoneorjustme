function setMessage (date) {
  const el = document.getElementById('msg')
  const el2 = document.getElementById('sorry')
  const config = window.config
  const itIsTheDay = date.getDay() === config.day

  el.innerText = ''
  el2.innerText = ''

  if (itIsTheDay) {
    el.className = 'yes'
    el.innerText = config.messages.yes
    if (config.sorryIf) {
      el2.innerText = config.messages.sorry
    }
  } else {
    el.className = 'no'
    el.innerText = config.messages.no
    if (!config.sorryIf) {
      el2.innerText = config.messages.sorry
    }
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
