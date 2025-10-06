OverlayScrollbars.extension("fmExtension", function(defaultOptions, framework, compatibility)
{ 
    var osInstance = this;
    var extension = { };
	
	extension.on = function(callbackName, args)
	{
		var instanceElements = osInstance.getElements();
		
        switch(callbackName)
		{
            case "scroll":
			case 'contentSizeChanged':
			case "updated":
				var scrollInfo = osInstance.scroll();
				var veryBottom = parseInt(scrollInfo.ratio.y * 100) >= 95 || scrollInfo.max.y === 0;
				if (veryBottom)
				{
					if ($(instanceElements.target).hasClass('scrollNotBottom'))
					{
						$(instanceElements.target).removeClass('scrollNotBottom');
					}
				}
				else
				{
					if (!$(instanceElements.target).hasClass('scrollNotBottom'))
					{
						$(instanceElements.target).addClass('scrollNotBottom');
					}
				}
				break;
			case "overflowChanged":
				var scrollInfo = osInstance.scroll();
				if (scrollInfo.max.y === 0)
				{
					if (!$(instanceElements.target).hasClass('scrollNoOverflow'))
					{
						$(instanceElements.target).addClass('scrollNoOverflow');
					}
				}
				else
				{
					if ($(instanceElements.target).hasClass('scrollNoOverflow'))
					{
						$(instanceElements.target).removeClass('scrollNoOverflow');
					}
				}
				break;
		}
    }
	
    return extension;
});