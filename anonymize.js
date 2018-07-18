document.body.classList.add('anon-enabled')

document.addEventListener('keypress', function (e) {
  console.log(e)
  if (e.key === 'a' && e.ctrlKey) {
    document.body.classList.toggle('anon-enabled')
  }
})