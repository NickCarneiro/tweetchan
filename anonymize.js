var hashCode = function(s) {
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + s.charCodeAt(i++) | 0
  return h
}
var replaceNames = function () {
  console.log('replacing names')
  var nameElements = document.getElementsByClassName('fullname')
  for (var i = 0; i < nameElements.length; i++) {
    var nameElement = nameElements[i]
    console.log(nameElement.innerHTML)
    var hashInteger = Math.abs(hashCode(nameElement.innerHTML))
    var wordListSize = 2048
    var wordIndex = hashInteger % wordListSize
    nameElement.innerHTML = window.wordList[wordIndex]
  }
  var userNameElements = document.getElementsByClassName('username')
  for (var nameElement of userNameElements) {
    nameElement.innerHTML = ''
  }
}

var removeChecks = function () {

}
window.onload = replaceNames

