const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    // '+' operator converts to number from a string
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText
    const increment = target / 400

    console.log(increment)

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
