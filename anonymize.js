document.body.classList.add('anon-enabled')

document.addEventListener('keypress', function (e) {
  console.log(e)
  if ((e.code === 'KeyF' && e.ctrlKey && e.shiftKey) || e.code === 'KeyF' && e.altKey) {
    document.body.classList.toggle('anon-enabled')
  }
})