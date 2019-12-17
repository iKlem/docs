//= require ../lib/_jquery
//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
//= require ../lib/_imagesloaded.min
(function (global) {
	'use strict';

	var closeToc = function () {
		$(".tocify-wrapper").removeClass('open');
		$("#nav-button").removeClass('open');
	};

	var makeToc = function () {
		tocbot.init({
			// Options
			scrollSmooth: true,

			// Neccesary to the operation.
			tocSelector: '#toc',
			contentSelector: '.content',
			headingSelector: 'h1, h2',
			ignoreSelector: '.toc-ignore',			
			orderedList: true,
			includeHtml: true,
			linkClass: 'tocify-header',
			listItemClass: 'tocify-item',
			headingObjectCallback: function (obj, elem) {
				const span = document.createElement('span');
				if (elem.classList.contains('divider'))
					span.classList.add('divider');
				if (obj.nodeName === 'H1') {
					span.innerText = elem.textContent;
				} else {
					const name = elem.dataset.name.toString();
					const n = name.lastIndexOf('.');
					if (n !== -1)
						span.innerText = name.substring(n + 1);
					else
						span.innerText = name;
					span.classList = elem.classList;
				}
				obj.childNodes = [span];
				return obj;
			},

		});
		// Fix dividers
		document.querySelectorAll(".tocify-item .divider").forEach(function (elem) {
			elem.parentElement.classList.add('divider');
		})

	};

	$(function () {
		console.time('makeToc');
		makeToc();
		console.timeEnd('makeToc');
		setupLanguages($('body').data('languages'));
	});
})(window);

