// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: pen;

module.exports.leftBar = (height, width, color) => {

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
