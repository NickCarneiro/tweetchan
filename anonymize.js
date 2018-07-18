document.body.classList.add('anon-enabled')

document.addEventListener('keypress', function (e) {
  console.log(e)
  if (e.key === 'F' && e.ctrlKey || e.key === 'f' && e.altKey) {
    document.body.classList.toggle('anon-enabled')
  }
})