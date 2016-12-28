'use strict';

window.onload = function() {

// API server for JSON https://jsonplaceholder.typicode.com/
// API server for JSON http://fixer.io/
// API server for JSONp http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-2.json

	var xhr = new XMLHttpRequest();
	var xhrTextBlock = document.getElementsByClassName('siteBody__nativeXHR');
	var fetchTextBlock = document.getElementsByClassName('siteBody__fetch');
	var jsonpTextBlock = document.getElementsByClassName('siteBody__JSON');
	var jQueryAjaxTextBlock = document.getElementsByClassName('siteBody__jQuery-Ajax');
	var jQueryGetTextBlock = document.getElementsByClassName('siteBody__jQuery-get');
	var jQueryPostTextBlock = document.getElementsByClassName('siteBody__jQuery-post');

// XMLHttpRequest

	// var myResponse = '';


	// xhr.open('GET', 'https://jsonplaceholder.typicode.com/');

	// xhr.send();

	// xhr.addEventListener('readystatechange', function() {

	// 	xhr.Done = 4;
	// 	if (xhr.readyState === xhr.Done) { 
	// 		myResponse = xhr.responseText;
	// 		xhrTextBlock[0].innerHTML = JSON.parse(myResponse);
	// 	}
	// });

// fetch

	var xhr2 = fetch('http://fixer.io/', {method: 'GET'});

	xhr2.then(function(response) {
		return response;
		// return response.json();
	})
	.then(function (data) {
		console.log(data);
		//fetchTextBlock.innerHTML = data;
	})
	.catch(function (err){
		console.log('You`ve gon an error: ' + err);
	});


// $.ajax()

	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/',
		type: 'GET',
		success: function(response) { console.log('jquery ajax method response: ' + response); jQueryAjaxTextBlock.innerHTML = response; },
		error: function(err) { console.log('jquery ajax method error: ' + err); }
	});




}