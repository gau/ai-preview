/*
save_and_export_PNG24.jsx
Copyright (c) 2015 Toshiyuki Takahashi
Released under the MIT license
http://opensource.org/licenses/mit-license.php
http://www.graphicartsunit.com/
ver. 0.1.1
*/
(function () {

	// Setting
	var settings = {
		"imageName" : "image.png",
		"imagePath" : "ai-preview/source/images/"
	}

	// Main Process
	var layer = app.activeDocument.activeLayer;
	var aifullName = app.activeDocument.fullName.toString();
	var fullPath = aifullName.substring(0,aifullName.lastIndexOf("/")+1) + settings.imagePath + settings.imageName;
	
	// Save active document
	app.activeDocument.save();

	// Export PNG
	function exportFileToPNG24 (dest) {
		if (app.documents.length > 0) {
			var exportOptions = new ExportOptionsPNG24();
			var type = ExportType.PNG24;
			var fileSpec = new File(dest);
			exportOptions.antiAliasing = true;
			exportOptions.transparency = true;
			exportOptions.saveAsHTML = false;
			exportOptions.artBoardClipping = true;
			app.activeDocument.exportFile(fileSpec, type, exportOptions);
		}
	}
	exportFileToPNG24(fullPath);
}());