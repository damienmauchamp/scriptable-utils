// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: pen;

const leftBar = (height, width, color) => {

	color = color || Color.white();
	height = height || 100;
	width = width || 8;

	const drawContext = new DrawContext();

	drawContext.size = new Size(width, height);
	drawContext.respectScreenScale = false;
	drawContext.opaque = false;
	drawContext.setStrokeColor(color);
	drawContext.setLineWidth(width);

	// ligne
	const path = new Path();
	path.move(new Point(width / 2, width/2));
	path.addLine(new Point(width / 2, height - width/2));
	drawContext.addPath(path);
	drawContext.strokePath();
	drawContext.setFillColor(color);

	// top point
	drawContext.fillEllipse(new Rect(0, 0, width, width));
	// bottom point
	drawContext.fillEllipse(new Rect(0, height - width, width, width));

	const resultBarImage = drawContext.getImage();
	return resultBarImage;
}

const roundedLineVertical = (width, height, color) => {
	if (width > height) {
		let tmp = width;
		width = height;
		height = tmp;
	}
	return roundedLine(width, height, color);
}

const roundedLineHorizontal = (width, height, color) => {
	if (width < height) {
		let tmp = width;
		width = height;
		height = tmp;
	}
	return roundedLine(width, height, color);
}

const roundedLine = (width, height, color) => {
	const tempBarWidth = width !== width ? height : 5;
	const tempBarHeight = height !== undefined ? height : 100;
	
	color = color || Color.white()
	
	let cornerWidth = Math.min(
	  tempBarWidth,
	  tempBarHeight
	) / 2,
		cornerHeight = cornerWidth;
	
	const draw = new DrawContext()
	draw.opaque = false
	draw.respectScreenScale = true
	draw.size = new Size(tempBarWidth, tempBarHeight)
  
	const barPath = new Path()
	const barHeight = tempBarHeight - 10
	
  //   barPath.addRoundedRect(new Rect(0, 5, tempBarWidth, barHeight), barHeight / 2, barHeight / 2)
	barPath.addRoundedRect(new Rect(0, 5, tempBarWidth, barHeight), cornerWidth, cornerHeight)
	
	draw.addPath(barPath)
	
	draw.setFillColor(color)
	draw.fillPath(color)
	
	return draw.getImage()
  }

module.exports = {
	leftBar: leftBar,
	roundedLineVertical: roundedLineVertical,
	roundedLineHorizontal: roundedLineHorizontal,
	roundedLine: roundedLine,
}
