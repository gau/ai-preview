var gulp = require("gulp");
var browserSync = require("browser-sync");

// path
var dev_dir = "./source/";

// local server
gulp.task("server", function() {
	browserSync({
		server: {
			baseDir: dev_dir
		}
	});
});

// Main task
gulp.task("bs-reload", function () {
	browserSync.reload();
});
gulp.task("watch", function() {
	gulp.watch(dev_dir + "images/*", ["bs-reload"]);
});
gulp.task("default",["server", "watch"]);
