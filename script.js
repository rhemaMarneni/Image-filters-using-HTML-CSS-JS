var image = null,
	greyImage = null,
	redImage = null,
	orangeImage = null,
	yellowImage = null,
	greenImage = null,
	blueImage = null,
	indigoImage = null,
	violetImage = null,
	brightImage = null,
	dimImage = null,
	rainbowImage = null,
	bimage,
	imgcanvas = document.getElementById("can")

//uploading an image
function UploadImage() {
	var fileinput = document.getElementById("upload")
	image = new SimpleImage(fileinput)
	greyImage = new SimpleImage(fileinput)
	redImage = new SimpleImage(fileinput)
	orangeImage = new SimpleImage(fileinput)
	yellowImage = new SimpleImage(fileinput)
	greenImage = new SimpleImage(fileinput)
	blueImage = new SimpleImage(fileinput)
	indigoImage = new SimpleImage(fileinput)
	violetImage = new SimpleImage(fileinput)
	rainbowImage = new SimpleImage(fileinput)
	brightImage = new SimpleImage(fileinput)
	dimImage = new SimpleImage(fileinput)
	image.drawTo(imgcanvas)
}

//grayscale filter
function grayScale() {
	for (var pixel of greyImage.values()) {
		var red = pixel.getRed()
		var green = pixel.getGreen()
		var blue = pixel.getBlue()
		var avg = (red + green + blue) / 3
		pixel.setRed(avg)
		pixel.setGreen(avg)
		pixel.setBlue(avg)
	}
	greyImage.drawTo(imgcanvas)
}

//red filter
function doRed() {
	for (var pixel of redImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = Math.round(2 * avgColor)
			green = 0
			blue = 0
		} else {
			red = 255
			green = Math.round(2 * avgColor - 255)
			blue = Math.round(2 * avgColor - 255)
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	redImage.drawTo(imgcanvas)
}

//orange filter
function doOrange() {
	for (var pixel of orangeImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = Math.round(2 * avgColor)
			green = Math.round(0.8 * avgColor)
			blue = 0
		} else {
			red = 255
			green = Math.round(1.2 * avgColor - 51)
			blue = Math.round(2 * avgColor - 255)
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	orangeImage.drawTo(imgcanvas)
}

//yellow filter
function doYellow() {
	for (var pixel of yellowImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = Math.round(2 * avgColor)
			green = Math.round(2 * avgColor)
			blue = 0
		} else {
			red = 255
			green = 255
			blue = Math.round(2 * avgColor - 255)
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	yellowImage.drawTo(imgcanvas)
}

//green filter
function doGreen() {
	for (var pixel of greenImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = 0
			green = Math.round(2 * avgColor)
			blue = 0
		} else {
			red = Math.round(2 * avgColor - 255)
			green = 255
			blue = Math.round(2 * avgColor - 255)
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	greenImage.drawTo(imgcanvas)
}

//blue filter
function doBlue() {
	for (var pixel of blueImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = 0
			green = 0
			blue = Math.round(2 * avgColor)
		} else {
			red = Math.round(2 * avgColor - 255)
			green = Math.round(2 * avgColor - 255)
			blue = 255
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	blueImage.drawTo(imgcanvas)
}

//indigo filter
function doIndigo() {
	for (var pixel of indigoImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = Math.round(0.8 * avgColor)
			green = 0
			blue = Math.round(2 * avgColor)
		} else {
			red = Math.round(1.2 * avgColor - 51)
			green = Math.round(2 * avgColor - 255)
			blue = 255
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	indigoImage.drawTo(imgcanvas)
}

//violet filter
function doViolet() {
	for (var pixel of violetImage.values()) {
		var avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
		if (avgColor < 128) {
			red = Math.round(1.6 * avgColor)
			green = 0
			blue = Math.round(1.6 * avgColor)
		} else {
			red = Math.round(0.4 * avgColor + 153)
			green = Math.round(2 * avgColor - 255)
			blue = Math.round(0.4 * avgColor + 153)
		}
		pixel.setRed(red)
		pixel.setGreen(green)
		pixel.setBlue(blue)
	}
	violetImage.drawTo(imgcanvas)
}

//brighten the image by a value of 100
function brighten() {
	if (brightImage != null) {
		bImage = brightImage
		for (var pixel of bImage.values()) {
			var red = pixel.getRed()
			var green = pixel.getGreen()
			var blue = pixel.getBlue()
			var r = red + 50,
				g = green + 50,
				b = blue + 50
			pixel.setRed(r)
			pixel.setGreen(g)
			pixel.setBlue(b)
		}
		bImage.drawTo(imgcanvas)
	} else {
		alert("Image not loaded")
	}
}

//dim the image by a value of 50
function dim() {
	if (brightImage != null) {
		bImage = brightImage
		for (var pixel of bImage.values()) {
			var red = pixel.getRed()
			var green = pixel.getGreen()
			var blue = pixel.getBlue()
			var r = red - 50,
				g = green - 50,
				b = blue - 50
			pixel.setRed(r)
			pixel.setGreen(g)
			pixel.setBlue(b)
		}
		bImage.drawTo(imgcanvas)
	} else {
		alert("Image not loaded")
	}
}

//Rainbow filter
function doRainbow() {
	if (rainbowImage != null) {
		var rheight = rainbowImage.getHeight()
		var segment = parseInt(rheight / 7)
		for (var pixel of rainbowImage.values()) {
			var Y = pixel.getY()
			if (Y >= segment) {
				doRed()
			} else {
				doViolet()
			}
		}
		rainbowImage.drawTo(imgcanvas)
	} else {
		alert("Image is null")
	}
}

//reset to default image
function resetImage() {
	if (image != null) {
		image.drawTo(imgcanvas)
	} else {
		alert("Image is null")
	}
}

//clear the canvas and delete the image
function clearCanvas() {
	var ctx = imgcanvas.getContext("2d")
	ctx.clearRect(0, 0, imgcanvas.width, imgcanvas.height)
	image = null
}
