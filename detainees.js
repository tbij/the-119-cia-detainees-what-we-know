function Interactive() {

    function setup() {
        request('prisoners.json', function (prisoners) {
            prisoners.forEach(function (prisoner, i) {
                var prisonerItem = document.createElement('li')
                prisonerItem.id = i
                prisonerItem.innerHTML = '<img class="prisonericon" src="prisoner-icons/prisoner-' + prisoner.status + '.png"/>'
                prisonerItem.addEventListener('click', function (e) {
                    var prisonerItemSelected = document.querySelector('.who-are-they .selected')
                    var prisonerSelected = prisoners[prisonerItemSelected.id]
                    prisonerItemSelected.innerHTML = '<img class="prisonericon" src="prisoner-icons/prisoner-' + prisonerSelected.status + '.png"/>'
                    prisonerItemSelected.classList.remove('selected')
                    var prisonerItem = e.target.parentElement
                    prisonerItem.classList.add('selected')
                    prisonerItem.innerHTML = '<img class="prisonericon" src="prisoner-icons/prisoner-' + prisoner.status + '-on.png"/>'
                    document.querySelector('.who-are-they .prisonercard').innerHTML = '<a href="' + prisoner.url + '"><img src="prisoner-cards/' + prisoner.image + '"/></a>'
                })
                document.querySelector('.who-are-they ol').appendChild(prisonerItem)
            })
	    var prisonerOne = prisoners[0]
	    var prisonerItemOne = document.querySelector('.who-are-they ol :first-child')
            prisonerItemOne.classList.add('selected')
            prisonerItemOne.innerHTML = '<img class="prisonericon" src="prisoner-icons/prisoner-' + prisonerOne.status + '-on.png"/>'
            document.querySelector('.who-are-they .prisonercard').innerHTML = '<a href="' + prisonerOne.url + '"><img src="prisoner-cards/' + prisonerOne.image + '"/></a>'
        })
    }
    
    function request(uri, callback) {
        var http = new XMLHttpRequest()
        http.open('GET', uri, true)
        http.onload = function () {
            callback(JSON.parse(this.responseText))
        }
        http.send()
    }

    setup()
    
}

addEventListener('DOMContentLoaded', Interactive)
