$(function () {
	let $h1 = $("h1")
	let $postal = $("input[name='postalCode']")

	$('form').on('submit', function(event) {
		event.preventDefault()

		let postalCode = $.trim($postal.val())
		$h1.text('Loading...')

		let request = $.ajax({
			url: '/' + postalCode,
			dataType: 'json'
		})

		request.done(function(data) {
			let temperature = data.temperature
			$h1.html("It is " + temperature + "&#176; in " + postalCode + ".")
		})
		request.fail(function() {
			$h1.text('Error!')
		})
	})w
})