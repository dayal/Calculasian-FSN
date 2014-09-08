
$(function() {

	// // Include Templates
	// $('#home').load("templates/home.html");
	// $('#members').load("templates/members.html");
	// $('#about').load("templates/about.html");
	// $('#contact').load("templates/contact.html");

	// Construct video pages
	// Iterate through video objects
	for (var i=0; i < VIDEOS.length; i++) {
		var video = VIDEOS[i],
				name = video.name,
				bgcolor = video.bgcolor,
				isHomeVideo = video.isHomeVideo,
				title,
				desciption,
				link;
		if (isPageCN) {
			title = video.cn.title;
			description = video.cn.description;
			link = video.cn.link;
		} else {
			title = video.en.title;
			description = video.en.description;
			link = video.en.link;
		}

		var $article = $('<article>', {'data-link': name, 'data-background': bgcolor});
		var $videoDiv = $('<div>', {'class': 'video'});

		$article.append($('<h1>', {text: title}))
			.append($('<p>', {text: description}))
			.append($videoDiv);
		$videoDiv.append($('<img>', {'class': 'ratio', 'src': 'http://placehold.it/16x9'}))
			.append($('<iframe>', {'src': link, 'frameborder': 0}));
		$('#videos').append($article);

		// Set home video
		if (video.isHomeVideo) {
			$('#home-page').append($videoDiv.clone());
		}
	}
	// Finish constructing video pages

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
      "link": "http://player.youku.com/embed/XNjQwNzE4NjAw"
    },
    "en": {
      "title": "Evolution of Chinese Music",
      "description": "This is a medley of some of our favorite Chinese songs from 1960s-2010s. Enjoy!",
      "link": "https://youtube.com/embed/qI4LdAUT0lQ?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "the-era-of-jay-part-1",
    "bgcolor": "#1b75a3",
    "isHomeVideo": false,
    "cn": {
      "title": "依然周杰伦(上集) The Era of Jay (Part I)",
      "description": "希望大家喜欢这首歌，祝大家新年快乐，也祝周杰伦生日快乐。",
      "link": "http://player.youku.com/embed/XNjY3MTI1Nzgw"
    },
    "en": {
      "title": "The Era of Jay (Part I)",
      "description": "",
      "link": "https://youtube.com/embed/AEpwAzLISXU?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "where-did-time-fly",
    "bgcolor": "#db6816",
    "isHomeVideo": false,
    "cn": {
      "title": "时间都去哪儿了 Where Did Time Fly",
      "description": "",
      "link": "http://player.youku.com/embed/XNjg0MTU4MDAw"
    },
    "en": {
      "title": "Where Did Time Fly",
      "description": "",
      "link": "https://youtube.com/embed/JMyZDJBMC0w?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "frozen",
    "bgcolor": "#a6b4ab",
    "isHomeVideo": false,
    "cn": {
      "title": "冰雪奇缘 Frozen",
      "description": "",
      "link": "http://player.youku.com/embed/XNjk4Njg5OTY0"
    },
    "en": {
      "title": "Frozen",
      "description": "",
      "link": "https://youtube.com/embed/IrObyn-T-vo?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "brightest-star-in-the-night-sky",
    "bgcolor": "#34353f",
    "isHomeVideo": false,
    "cn": {
      "title": "夜空中最亮的星 Brightest Star in the Night Sky",
      "description": "",
      "link": "http://player.youku.com/embed/XNzMzMjg0NTQw"
    },
    "en": {
      "title": "Brightest Star in the Night Sky",
      "description": "",
      "link": "https://youtube.com/embed/V9ix0GCNlS8?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "love-never-felt-so-good",
    "bgcolor": "#7f33cc",
    "isHomeVideo": false,
    "cn": {
      "title": "Love Never Felt So Good",
      "description": "",
      "link": "http://player.youku.com/embed/XNzYwMzE0MzY4"
    },
    "en": {
      "title": "Love Never Felt So Good",
      "description": "",
      "link": "https://youtube.com/embed/HzwO_66VGoE?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  },
  {
    "name": "white-moonlight",
    "bgcolor": "#dddba2",
    "isHomeVideo": true,
    "cn": {
      "title": "白月光 White Moonlight",
      "description": "",
      "link": "http://player.youku.com/embed/XNzc0NDQyMzIw"
    },
    "en": {
      "title": "White Moonlight",
      "description": "",
      "link": "https://youtube.com/embed/czXUyd10soY?autoplay=0&controls=1&showinfo=0&autohide=1"
    }
  }
]
