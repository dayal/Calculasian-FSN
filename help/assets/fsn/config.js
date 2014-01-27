define(function() {


//	========================================================================================
//										CONFIG
//	========================================================================================


	return {
		
		/**
			--------------------------------------------------------------------------------
				NAVIGATION CONTROLLERS
				Settings of the navigation modes: 
					- keyboard
					- arrow buttons
					- dots buttons
			--------------------------------------------------------------------------------
		*/
		
		controllers: {
		
			// KEYBOARD NAVIGATION
			// ----------------------------
			
			keyboard: {
				
				// Enable/Disable Keyboard arrow control
				// [true, false]
				enable:	true
			
			},
			
			// ARROWS NAVIGATION
			// ----------------------------
			
			arrows: {
				
				// Enable/Disable Arrows
				// [true, false]
				enable:	false,
				
				// hide if the window is too small
				// [true, false]
				visibilityControl: true,
				
				// Arrows position
				// [top, center, bottom]	
				position: 'center',
				
				// Arrows Width	
				// *number*
				width: 37,
				
				// Arrows Height	
				// *number*	
				height: 73,
				
				// Margin from window
				// *number*
				marginWindow: 30
				
			},
			
			// DOTS NAVIGATION
			// ----------------------------
			
			dots: {
			
				sections: {
					
					// Enable/Disable Dots for sections navigation
					// [true, false]
					enable: false,
					
					// hide if the window is too small
					// [true, false]
					visibilityControl: true,
				
					// Dots position
					// [topleft, centerleft, bottomleft, topright, centerright, bottomright]	
					position: 'bottomleft',
					
					// Width and Height of the dots
					// *number*
					side: 17,
					
					// Margin between dots
					// *number*
					margin: 5,
					
					// Margin from window
					// *number*
					marginWindow: 10
					
				},
				
				pages: {
					
					// Enable/Disable Dots for pages navigation
					// [true, false]
					enable: false,
				
					// Dots position
					// [topleft, topcenter, topright, bottomleft, bottomcenter, bottomright]	
					position: 'bottomcenter',
					
					// Width and Height of the dots
					// *number*
					side: 15,
					
					// Margin between dots
					// *number*
					margin: 5,
					
					// Margin from window
					// *number*
					marginWindow: 10
					
				}
			
			}			
		
		},
		
		/**
			--------------------------------------------------------------------------------
				BAR
				Div that stays in position fixed always visible.
			--------------------------------------------------------------------------------
		*/
		
		bar: {
		
			// Bar position
			// [top, right, bottom, left]	
			position: 'left'
		
		},
		
		/**
			--------------------------------------------------------------------------------
				PAGES SETTINGS
				Settings of the pages
			--------------------------------------------------------------------------------
		*/
		
		pages: {
			
			// Body width
			// *number*
			width: 0,
			
			// Body alignment
			// [left, center, right]
			alignment: 'center',
			
			// Body margin top & margin bottom
			// *number*
			margin: 0,
			
			// Page Scroll
			// [true, false]
			scrollPage: true,
			
			// Page slide speed
			// *number*
			speed: 500,
			
			// Page slide animation easing
			// [jswing, def, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce]
			easing: 'easeInQuart',
			
			// Ajax loader color
			// ['white', 'black']
			loader: 'white',
			
			animationBody: {
				
				// Body animation on page changed
				// [true, false]
				enable: true,
				
				// Body animation shift
				// *number*
				shift: 30,
				
				// Delay relative to page changed animation 
				// *number*
				delay: 700,
			
				// Body animation easing
				// [jswing, def, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce]
				easing: 'easeOutQuart'
			
			}
			
		},
		
		/**
			--------------------------------------------------------------------------------
				SCROLLBAR SETTINGS
				Settings of the Scrollbar
			--------------------------------------------------------------------------------
		*/
		
		scrollbar: {
		
			// TRACK
			// ----------------------------
			
			track: {
				
				// Scrollbar width
				// *number*
				width: 16,
				
				// Track padding
				// *number*
				padding: 4,
				
				// Track margin (from the text)
				// *number*
				margin: 0,
				
				// Background color
				// *hex color*
				background: 'none',
				
				// Track border radius
				// *number*
				borderRadius: 0
				
			},
			
			// CURSOR
			// ----------------------------
			
			cursor: {
				
				// Background color
				// *hex color*
				background: '#000',
				
				// Border width
				// *number*
				borderWidth: 0,
				
				// Border color
				// *hex color*
				borderColor: '#ccc',
				
				// Cursor border radius
				// *number*
				borderRadius: 4,
				
				// Cursor opacity
				// [0-1]
				opacity: 0.4
				
			}	
		
		},
		
		/**
			--------------------------------------------------------------------------------
				ALERT IE6
				Blocks access with IE6 showing a alert message that invites 
				the user to update the browser
			--------------------------------------------------------------------------------
		*/
		
		ie6Alert: {
		
			// Enable/Disable alert for IE6
			// [true, false]
			enable: true
		
		}
		
	
	}

});