function CCreditsPanel(){
 
  // Create the background overlay div
  let overlayDiv = document.createElement('div');
  overlayDiv.style.position = 'fixed';
  overlayDiv.style.top = 0;
  overlayDiv.style.left = 0;
  overlayDiv.style.width = '100%';
  overlayDiv.style.height = '100%';
  overlayDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlayDiv.style.zIndex = 9999;
  
  // Create the content div
  let contentDiv = document.createElement('div');
  contentDiv.style.position = 'fixed';
  contentDiv.style.width = '300px';
  contentDiv.style.top = '50%';
  contentDiv.style.left = '50%';
  contentDiv.style.transform = 'translate(-50%, -50%)';
  contentDiv.style.backgroundColor = '#302500';
  contentDiv.style.padding = '20px 0px 20px 0px';
  contentDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 1)';
  contentDiv.style.borderRadius = '8px';
  contentDiv.style.border = '1px solid grey';
  contentDiv.style.zIndex = 10000;
  contentDiv.style.backgroundImage = "url('https://playpager.com/app-images/common/bcgwood7.jpg')";
  contentDiv.innerHTML = `
	  <div style="
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  color: #ffe9c4;
	  font-family: Arial, Helvetica, sans-serif;
	  font-size: 21px;
	  font-weight: bold;
	  text-align: center;
	  text-shadow: 2px 2px 4px #000;
	  ">
		Another Free Game<br>for You from
			<picture>
					<source srcset="https://playpager.com/app-images/common/250pxLogo.avif" type="image/avif">
					<source srcset="https://playpager.com/app-images/common/250pxLogo.webp" type="image/webp">
					<img style="display: block; width: 200px; height: 200px; margin: 0; src="https://playpager.com/app-images/common/250pxLogo.png" alt="Playpager" title="Playpager" loading="lazy" />
			</picture>
		Thanks for playing!<br><span style ="font-style: italic; font-weight: normal;">Remember to bookmark</span>
	  </div>
  `;

  // Create the close button
  let closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.display = 'block';
  closeButton.style.margin = '20px auto 0 auto';
  closeButton.style.padding = '10px 20px';
  closeButton.style.backgroundColor = '#007BFF';
  closeButton.style.color = '#fff';
  closeButton.style.fontSize = '16px';
  closeButton.style.border = '1px solid #fff';
  closeButton.style.borderRadius = '5px';
  closeButton.style.cursor = 'pointer';

  // Close button event listener to remove both divs
  closeButton.onclick = function() {
    document.body.removeChild(overlayDiv);
    document.body.removeChild(contentDiv);
  };

  // Append the close button to the content div
  contentDiv.appendChild(closeButton);

  // Append both divs to the body
  document.body.appendChild(overlayDiv);
  document.body.appendChild(contentDiv);
    
};


