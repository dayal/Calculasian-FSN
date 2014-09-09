
$(function() {

	// Include Templates
	$('#home').load('templates/home.html', null, function() {
		$('#home-page').append($homeVideo);
	});
	$('#members').load('templates/members.html');
	$('#aboutEN').load('templates/aboutEN.html');
	$('#aboutCN').load('templates/aboutCN.html');

	$('#contactEN').load('templates/contactEN.html', null, function() {
		$('<div>').appendTo('#contact-page').load('templates/donation.html');
	});	
	$('#contactCN').load('templates/contactCN.html', null, function() {
		$('<div>').appendTo('#contact-page').load('templates/donation.html');
	});

	// Construct video pages (without video iframes)
	// Iterate through video objects
	var urls = [],
		  $homeVideo = $(),
			homeVideoIndex = 0;

	for (var i=0; i < VIDEOS.length; i++) {
		var video = VIDEOS[i],
				name = video.name,
				bgcolor = video.bgcolor,
				isHomeVideo = video.isHomeVideo,
				title,
				desciption;
		if (isPageCN) {
			title = video.cn.title;
			description = video.cn.description;
			urls[i] = video.cn.url;
		} else {
			title = video.en.title;
			description = video.en.description;
			urls[i] = video.en.url;
		}

		// constuct DOM
		var $article = $('<article>', {'data-link': name, 'data-background': bgcolor, 'id': 'video-page' + i});
		var $videoDiv = $('<div>', {'class': 'video video' + i});  // Use class instead of id because there can be multiple instances of the same video
		$article.append($('<h1>', {text: title}))
			.append($('<p>', {text: description}))
			.append($videoDiv);
		$videoDiv.append($('<img>', {'class': 'ratio', 'src': 'http://placehold.it/16x9'}));
		$videoDiv.append($('<div>', {'class': 'loading icon-spin6 animate-spin loading' + i}));
		$('#videos').append($article);

		// Set home video
		if (video.isHomeVideo) {
			$homeVideo = $videoDiv.clone();
			homeVideoIndex = i;
		}
	}

	// Finish constructing video pages
	$('#fsn').on('fsn-ready', function(e) {  // FSN is ready

			// Load home page video
			$('#home').on('fsn-current', function(e, $page) {

				// Skip if iframe is already present
					if ($('#home-page .video').has('iframe').length == 0) {
						$('#home-page .video').append($('<iframe>', {'src': urls[homeVideoIndex], 'frameborder': 0}));
					}
			});

			// Load other videos
			$('article[id^=video-page]').on('fsn-current', function(e, $page) {
				// Get index from video page id
				var i = $(this).attr('id').replace( /^\D+/g, '');

				// Skip if iframe is already present
				$('.video' + i).each(function(index, element) {
					if ($(element).has('iframe').length == 0) {
						$iframe = $('<iframe>', {'src': urls[i], 'frameborder': 0});
						$(element).append($iframe);
					}

					$iframe[0].onload = function() {
						$('.loading' + i).remove();
					};
				});
			});
	});
});

// Google Analytics starts
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXX-X']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Get current page
var url = window.location.pathname;
var isPageCN = url.slice(url.lastIndexOf('/') + 1).match('cn\.html.*');

// Initialize video data
var VIDEOS =
[
  {
    "name": "evolution-of-chinese-music",
    "bgcolor": "#b2453b",
    "isHomeVideo": false,
    "cn": {
      "title": "华语流行乐进化史 Evolution of Chinese Music",
      "description": "华语乐坛1960-2010年金曲组曲",
      "url": "http://player.youku.com/embed/XNjQwNzE4NjAw"
    },
    "en": {
      "title": "Evolution of Chinese Music",
      "description": "This is a medley of some of our favorite Chinese songs from 1960s-2010s. Enjoy!",
      "url": "https://youtube.com/embed/qI4LdAUT0lQ?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "the-era-of-jay-part-1",
    "bgcolor": "#1b75a3",
    "isHomeVideo": false,
    "cn": {
      "title": "依然周杰伦(上集) The Era of Jay (Part I)",
      "description": "希望大家喜欢这首歌，祝大家新年快乐，也祝周杰伦生日快乐。",
      "url": "http://player.youku.com/embed/XNjY3MTI1Nzgw"
    },
    "en": {
      "title": "The Era of Jay (Part I)",
      "description": "",
      "url": "https://youtube.com/embed/AEpwAzLISXU?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "where-did-time-fly",
    "bgcolor": "#db6816",
    "isHomeVideo": false,
    "cn": {
      "title": "时间都去哪儿了 Where Did Time Fly",
      "description": "",
      "url": "http://player.youku.com/embed/XNjg0MTU4MDAw"
    },
    "en": {
      "title": "Where Did Time Fly",
      "description": "",
      "url": "https://youtube.com/embed/JMyZDJBMC0w?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "frozen",
    "bgcolor": "#a6b4ab",
    "isHomeVideo": false,
    "cn": {
      "title": "冰雪奇缘 Frozen",
      "description": "",
      "url": "http://player.youku.com/embed/XNjk4Njg5OTY0"
    },
    "en": {
      "title": "Frozen",
      "description": "",
      "url": "https://youtube.com/embed/IrObyn-T-vo?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "brightest-star-in-the-night-sky",
    "bgcolor": "#34353f",
    "isHomeVideo": false,
    "cn": {
      "title": "夜空中最亮的星 Brightest Star in the Night Sky",
      "description": "",
      "url": "http://player.youku.com/embed/XNzMzMjg0NTQw"
    },
    "en": {
      "title": "Brightest Star in the Night Sky",
      "description": "",
      "url": "https://youtube.com/embed/V9ix0GCNlS8?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "love-never-felt-so-good",
    "bgcolor": "#7f33cc",
    "isHomeVideo": false,
    "cn": {
      "title": "Love Never Felt So Good",
      "description": "",
      "url": "http://player.youku.com/embed/XNzYwMzE0MzY4"
    },
    "en": {
      "title": "Love Never Felt So Good",
      "description": "",
      "url": "https://youtube.com/embed/HzwO_66VGoE?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "white-moonlight",
    "bgcolor": "#dddba2",
    "isHomeVideo": true,
    "cn": {
      "title": "白月光 White Moonlight",
      "description": "",
      "url": "http://player.youku.com/embed/XNzc0NDQyMzIw"
    },
    "en": {
      "title": "White Moonlight",
      "description": "",
      "url": "https://youtube.com/embed/czXUyd10soY?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  }
];

