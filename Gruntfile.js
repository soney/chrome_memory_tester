module.exports = function(grunt) {
	var manifest = grunt.file.readJSON('manifest.json'); // Project configuration.

	grunt.initConfig({
		manifest: manifest,
		compress: {
			production: {
				options: {
					archive: '<%= manifest.name %>-<%= manifest.version %>.zip',
					mode: "zip"
				},
				//dest: '<%= manifest.name %>-<%= manifest.version %>.zip',
				src: [
					"background.js",
					"content_script.js",
					"icon_16.png",
					"icon_32.png",
					"icon_42.png",
					"icon_128.png",
					"manifest.json"
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compress');

	// Default task(s).
	grunt.registerTask('default', ['compress']);
};
