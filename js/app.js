function textChangeListener(evt){
			var id = evt.target.id;
			var text =  evt.target.value;

			if (id == "topLineText"){
				window.topLineText = text;
				this.style.textWrap="unrestricted";
			} else{
				window.bottomLineText = text;
			}
			redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
		}



		function redrawMeme(image, topLine, bottomLine){
			//Get canvas 2d context
			var canvas = document.querySelector("#c");
			var ctx = canvas.getContext("2d");
			var maxWidth = 500;
			var x = (canvas.width - maxWidth) / 2;

			
			
			if(image != null)
				ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

			//Your code here
			ctx.font= "30pt Impact";
        	ctx.textAlign="center";
        	ctx.strokeStyle = "#000000";
        	ctx.wordWrap = "break-word";
        	ctx.lineWidth = 3;
        	ctx.fillStyle = "#FFFFFF";
        	
			if(topLine != null){
				ctx.fillText(topLine, canvas.width/2, 40);
				ctx.strokeText(topLine, canvas.width/2, 40);
			}

			if(bottomLine != null){
				ctx.fillText(bottomLine, canvas.width/2, canvas.height -20);
				ctx.strokeText(bottomLine, canvas.width/2, canvas.height -20);
			}
		}

		function saveFile() {
			window.open(document.querySelector('canvas').toDataURL());
		}


		function handleFileSelect(evt) {
			var canvasWidth = 500;
			var canvasHeight = 500;
			var file = evt.target.files[0];

			var reader = new FileReader();
			reader.onload = function(fileObject) {
				var data = fileObject.target.result;

				//Create an image object
				var image = new Image();
				image.onload = function() {

					window.imageSrc = this;
					redrawMeme(window.imageSrc, null, null);
				}

				//Set image data to background image.
				image.src = data;
				console.log(fileObject.target.result);
			};

			reader.readAsDataURL(file)
		}
		var file = document.querySelector("#file");
		file.onchange = handleFileSelect;

		var top = document.querySelector("#topLineText");
		var btm = document.querySelector("#bottomLineText");

		top.onchange = textChangeListener;
		btm.onchange = textChangeListener;

		document.getElementById('file').addEventListener('change', handleFileSelect, false);
    	document.querySelector('button').addEventListener('click', saveFile, false);