'use strict';

window.onload = function() {

// API server for JSON https://jsonplaceholder.typicode.com/
// API server for JSON http://fixer.io/
// API server for JSONp http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-2.json

// ----- XMLHttpRequest -----

	var link1 = 'https://jsonplaceholder.typicode.com/posts/1';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', link1, true);
	xhr.send();

	xhr.addEventListener('readystatechange', function() {
		xhr.Done = 4;
		if (xhr.readyState === xhr.Done) {
			$('.siteBody__nativeXHR')
			.html('<h2 class="way__title">XMLHttpRequest</h2><p class="siteBody__description">Получение данных с: ' + link1 + '</p>' + xhr.responseText);
		}
	});

// ----- fetch -----

	var link2 = 'http://api.fixer.io/latest?symbols=USD,GBP';
	var xhr2 = fetch(link2, {method: 'GET'});

	xhr2.then(function(response) {
		return response.text();
		// return response.json();
	})
	.then(function (data) {
		// console.log(data);
		$('.siteBody__fetch').html('<h2 class="way__title">Fetch</h2><p class="siteBody__description">Получение данных с: ' + link2 + '</p>' + data);
	})
	.catch(function (err){
		console.log('You`ve gon an error: ' + err);
	});

// ----- JSONP -----

	var link3 = 'http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-2.json';
	var script = document.createElement('script');
	script.src = link3;
	document.head.appendChild(script);
	window.jsonCallback = function (data) {
		$('.siteBody__JSONP').html('<h2 class="way__title">JSONP</h2><p class="siteBody__description">Получение данных с: ' + link3 + '</p>' + JSON.stringify(data));
	};

// ----- $.ajax() -----

	var link4 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
	$.ajax({
		url: link4,
		type: 'GET',
		dataType: 'json',
		success: function(response) { 
			$('.siteBody__jQuery-Ajax').html('<h2 class="way__title">$.ajax()</h2><p class="siteBody__description">Получение данных с: ' + link4 + '</p>' + JSON.stringify(response)); 
		},
		error: function(err) { console.log('$.ajax() method error: ' + err); }
	});

// ----- $.get() -----

	var link5 = 'https://jsonplaceholder.typicode.com/posts?userId=1';
	$.get(link5, function(data) {
		$('.siteBody__jQuery-get').html('<h2 class="way__title">$.get()</h2><p class="siteBody__description">Получение данных с: ' + link5 + '</p>' + JSON.stringify(data));
	});
		
// ----- $.post() -----

	var link6 = 'https://jsonplaceholder.typicode.com/posts';
	$.post(link6, function(data) {
		$('.siteBody__jQuery-post').html('<h2 class="way__title">$.post()</h2><p class="siteBody__description">Получение данных с: ' + link6 + '</p>' + JSON.stringify(data));
	}, 'json');

};