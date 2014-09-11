$(function() {

	var lang = getLanguage(),
			homeVideoId,
			urls = [];
	loadPages(function() {
		// Finish constructing video pages
		$('#fsn').on('fsn-ready', function(e) {  // FSN is ready
			// Load home page video
			$('#home').on('fsn-current', function(e, $page) {

				// Skip if iframe is already present
					if ($('#home-page .video').has('iframe').length == 0) {
						$('#home-page .video').append($('<iframe>', {'src': urls[homeVideoId], 'frameborder': 0}));
						$('#home-page iframe')[0].onload = function() {
							$('.loading' + homeVideoId).remove();
						};
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

	function loadPages(callback) {

      loadVideoPages();
      if (lang == 'cn') {
        $('#home').attr('data-title', '主页');
        $('#members').attr('data-title', '成员');
        $('#videos').attr('data-title', '视频');
        $('#aboutEN').remove();
        $('#contactEN').remove();
      } else {
        $('#aboutCN').remove();
        $('#contactCN').remove();
      }

			callback();
	};

	function loadVideoPages() {
		// Construct video pages (without video iframes)
		// Iterate through video objects

		for (var i=0; i < VIDEOS.length; i++) {
			var video = VIDEOS[i],
					name = video.name,
					bgcolor = video.bgcolor,
					title,
					desciption;
			if (lang === 'cn') {
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
				$('#home-page').append($videoDiv.clone());
				homeVideoId = i;
			}
		}	
	};

});

// Detect URL and browser language
function getLanguage() {
	var browserLanguage = navigator.language || navigator.userLanguage;
	var lang = 'en';
	if (getParameterByName('lang') === 'cn') {
	  lang = 'cn';
	} else if (getParameterByName('lang') === 'en') {
	  lang = 'en';
	} else if (browserLanguage.substr(0, 3) == "zh-") {
	  lang = 'cn';
	}

	return lang;
}


// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

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

// Bitcoin donation plugin
// MIT License (MIT)
// Copyright (c) 2013 http://coinwidget.com/ 
// Copyright (c) 2013 http://scotty.cc/
if("number"!=typeof CoinWidgetComCounter)var CoinWidgetComCounter=0;if("object"!=typeof CoinWidgetCom)var CoinWidgetCom={source:"http://coinwidget.com/widget/",config:[],go:function(o){o=CoinWidgetCom.validate(o),CoinWidgetCom.config[CoinWidgetComCounter]=o,CoinWidgetCom.loader.jquery(),document.write('<span data-coinwidget-instance="'+CoinWidgetComCounter+'" class="COINWIDGETCOM_CONTAINER"></span>'),CoinWidgetComCounter++},validate:function(o){var i=[];return i.currencies=["bitcoin","litecoin"],i.counters=["count","amount","hide"],i.alignment=["al","ac","ar","bl","bc","br"],o.currency&&CoinWidgetCom.in_array(o.currency,i.currencies)||(o.currency="bitcoin"),o.counter&&CoinWidgetCom.in_array(o.counter,i.counters)||(o.counter="count"),o.alignment&&CoinWidgetCom.in_array(o.alignment,i.alignment)||(o.alignment="bl"),"boolean"!=typeof o.qrcode&&(o.qrcode=!0),"boolean"!=typeof o.auto_show&&(o.auto_show=!1),o.wallet_address||(o.wallet_address="My "+o.currency+" wallet_address is missing!"),o.lbl_button||(o.lbl_button="Donate"),o.lbl_address||(o.lbl_address="My Bitcoin Address:"),o.lbl_count||(o.lbl_count="Donation"),o.lbl_amount||(o.lbl_amount="BTC"),("number"!=typeof o.decimals||o.decimals<0||o.decimals>10)&&(o.decimals=4),o},init:function(){CoinWidgetCom.loader.stylesheet(),jQuery(window).resize(function(){CoinWidgetCom.window_resize()}),setTimeout(function(){CoinWidgetCom.build()},800)},build:function(){$containers=jQuery("span[data-coinwidget-instance]"),$containers.each(function(){$config=CoinWidgetCom.config[jQuery(this).attr("data-coinwidget-instance")],$counter="hide"==$config.counter?"":'<span><img src="'+CoinWidgetCom.source+'icon_loading.gif" width="13" height="13" /></span>',$button='<a class="COINWIDGETCOM_BUTTON_'+$config.currency.toUpperCase()+'" href="#"><img src="'+CoinWidgetCom.source+"icon_"+$config.currency+'.png" /><span>'+$config.lbl_button+"</span></a>"+$counter,jQuery(this).html($button),jQuery(this).find("> a").unbind("click").click(function(o){o.preventDefault(),CoinWidgetCom.show(this)})}),CoinWidgetCom.counters()},window_resize:function(){jQuery.each(CoinWidgetCom.config,function(o){CoinWidgetCom.window_position(o)})},window_position:function(o){switch($config=CoinWidgetCom.config[o],coin_window="#COINWIDGETCOM_WINDOW_"+o,obj="span[data-coinwidget-instance='"+o+"'] > a",$pos=jQuery(obj).offset(),$config.alignment){default:case"al":$top=$pos.top-jQuery(coin_window).outerHeight()-10,$left=$pos.left;break;case"ac":$top=$pos.top-jQuery(coin_window).outerHeight()-10,$left=$pos.left+jQuery(obj).outerWidth()/2-jQuery(coin_window).outerWidth()/2;break;case"ar":$top=$pos.top-jQuery(coin_window).outerHeight()-10,$left=$pos.left+jQuery(obj).outerWidth()-jQuery(coin_window).outerWidth();break;case"bl":$top=$pos.top+jQuery(obj).outerHeight()+10,$left=$pos.left;break;case"bc":$top=$pos.top+jQuery(obj).outerHeight()+10,$left=$pos.left+jQuery(obj).outerWidth()/2-jQuery(coin_window).outerWidth()/2;break;case"br":$top=$pos.top+jQuery(obj).outerHeight()+10,$left=$pos.left+jQuery(obj).outerWidth()-jQuery(coin_window).outerWidth()}jQuery(coin_window).is(":visible")?jQuery(coin_window).stop().animate({"z-index":99999999999,top:$top,left:$left},150):jQuery(coin_window).stop().css({"z-index":99999999998,top:$top,left:$left})},counter:[],counters:function(){$addresses=[],jQuery.each(CoinWidgetCom.config,function(o,i){$instance=o,$config=i,"hide"!=$config.counter?$addresses.push($instance+"_"+$config.currency+"_"+$config.wallet_address):$config.auto_show&&jQuery("span[data-coinwidget-instance='"+o+"']").find("> a").click()}),$addresses.length&&CoinWidgetCom.loader.script({id:"COINWIDGETCOM_INFO"+Math.random(),source:CoinWidgetCom.source+"lookup.php?data="+$addresses.join("|"),callback:function(){"object"==typeof COINWIDGETCOM_DATA&&(CoinWidgetCom.counter=COINWIDGETCOM_DATA,jQuery.each(CoinWidgetCom.counter,function(o,i){$config=CoinWidgetCom.config[o],i.count&&null!=i||(i={count:0,amount:0}),jQuery("span[data-coinwidget-instance='"+o+"']").find("> span").html("count"==$config.counter?i.count:i.amount.toFixed($config.decimals)+" "+$config.lbl_amount),$config.auto_show&&jQuery("span[data-coinwidget-instance='"+o+"']").find("> a").click()})),jQuery("span[data-coinwidget-instance] > span img").length>0&&setTimeout(function(){CoinWidgetCom.counters()},2500)}})},show:function(o){if($instance=jQuery(o).parent().attr("data-coinwidget-instance"),$config=CoinWidgetCom.config[$instance],coin_window="#COINWIDGETCOM_WINDOW_"+$instance,jQuery(".COINWIDGETCOM_WINDOW").css({"z-index":99999999998}),jQuery(coin_window).length){if(jQuery(coin_window).is(":visible"))return void CoinWidgetCom.hide($instance)}else{$sel=navigator.userAgent.match(/iPhone/i)?"onclick=\"prompt('Select all and copy:','"+$config.wallet_address+"');\"":'onclick="this.select();"',$html="<label>"+$config.lbl_address+'</label><input type="text" readonly '+$sel+'  value="'+$config.wallet_address+'" /><a class="COINWIDGETCOM_CREDITS" href="http://coinwidget.com/" target="_blank">CoinWidget.com</a><a class="COINWIDGETCOM_WALLETURI" href="'+$config.currency.toLowerCase()+":"+$config.wallet_address+'" target="_blank" title="Click here to send this address to your wallet (if your wallet is not compatible you will get an empty page, close the white screen and copy the address by hand)" ><img src="'+CoinWidgetCom.source+'icon_wallet.png" /></a><a class="COINWIDGETCOM_CLOSER" href="javascript:;" onclick="CoinWidgetCom.hide('+$instance+');" title="Close this window">x</a><img class="COINWIDGET_INPUT_ICON" src="'+CoinWidgetCom.source+"icon_"+$config.currency+'.png" width="16" height="16" title="This is a '+$config.currency+' wallet address." />',"hide"!=$config.counter&&($html+='<span class="COINWIDGETCOM_COUNT">0<small>'+$config.lbl_count+'</small></span><span class="COINWIDGETCOM_AMOUNT end">0.00<small>'+$config.lbl_amount+"</small></span>"),$config.qrcode&&($html+='<img class="COINWIDGETCOM_QRCODE" data-coinwidget-instance="'+$instance+'" src="'+CoinWidgetCom.source+'icon_qrcode.png" width="16" height="16" /><img class="COINWIDGETCOM_QRCODE_LARGE" src="'+CoinWidgetCom.source+'icon_qrcode.png" width="111" height="111" />');var i=jQuery("<div></div>");jQuery("body").append(i),i.attr({id:"COINWIDGETCOM_WINDOW_"+$instance}).addClass("COINWIDGETCOM_WINDOW COINWIDGETCOM_WINDOW_"+$config.currency.toUpperCase()+" COINWIDGETCOM_WINDOW_"+$config.alignment.toUpperCase()).html($html).unbind("click").bind("click",function(){jQuery(".COINWIDGETCOM_WINDOW").css({"z-index":99999999998}),jQuery(this).css({"z-index":99999999999})}),$config.qrcode&&jQuery(coin_window).find(".COINWIDGETCOM_QRCODE").bind("mouseenter click",function(){return $config=CoinWidgetCom.config[jQuery(this).attr("data-coinwidget-instance")],$lrg=jQuery(this).parent().find(".COINWIDGETCOM_QRCODE_LARGE"),$lrg.is(":visible")?void $lrg.hide():void $lrg.attr({src:CoinWidgetCom.source+"qr/?address="+$config.wallet_address}).show()}).bind("mouseleave",function(){$lrg=jQuery(this).parent().find(".COINWIDGETCOM_QRCODE_LARGE"),$lrg.hide()})}CoinWidgetCom.window_position($instance),jQuery(coin_window).show(),$pos=jQuery(coin_window).find("input").position(),jQuery(coin_window).find("img.COINWIDGET_INPUT_ICON").css({top:$pos.top+3,left:$pos.left+3}),jQuery(coin_window).find(".COINWIDGETCOM_WALLETURI").css({top:$pos.top+3,left:$pos.left+jQuery(coin_window).find("input").outerWidth()+3}),"hide"!=$config.counter&&($counters=CoinWidgetCom.counter[$instance],null==$counters&&($counters={count:0,amount:0}),null==$counters.count&&($counters.count=0),null==$counters.amount&&($counters.amount=0),jQuery(coin_window).find(".COINWIDGETCOM_COUNT").html($counters.count+"<small>"+$config.lbl_count+"</small>"),jQuery(coin_window).find(".COINWIDGETCOM_AMOUNT").html($counters.amount.toFixed($config.decimals)+"<small>"+$config.lbl_amount+"</small>")),"function"==typeof $config.onShow&&$config.onShow()},hide:function(o){$config=CoinWidgetCom.config[o],coin_window="#COINWIDGETCOM_WINDOW_"+o,jQuery(coin_window).fadeOut(),"function"==typeof $config.onHide&&$config.onHide()},in_array:function(o,n){for(i=0;i<n.length;i++)if(n[i]==o)return!0;return!1},loader:{loading_jquery:!1,script:function(o){if(!document.getElementById(o.id)){var i=document.createElement("script");i.onreadystatechange=function(){switch(this.readyState){case"complete":case"loaded":o.callback()}},i.onload=function(){o.callback()},i.src=o.source,i.id=o.id,document.lastChild.appendChild(i)}},stylesheet_loaded:!1,stylesheet:function(){if(!CoinWidgetCom.loader.stylesheet_loaded){CoinWidgetCom.loader.stylesheet_loaded=!0;var o=jQuery("<link/>");jQuery("head").append(o),o.attr({id:"COINWIDGETCOM_STYLESHEET",rel:"stylesheet",type:"text/css",href:CoinWidgetCom.source+"coin.css"})}},jquery:function(){return window.jQuery||CoinWidgetCom.loader.loading_jquery?void CoinWidgetCom.init():($prefix="file:"==window.location.protocol?"http:":"",void CoinWidgetCom.loader.script({id:"COINWIDGETCOM_JQUERY",source:$prefix+"//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",callback:function(){CoinWidgetCom.init()}}))}}};

