module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-evil-icons');
	grunt.initConfig({
		evil_icons: {
		    dist: {
		      files: {
		        "build/index.html": "src/index.html"
		      }
		    }
		  },
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/*.js']
				} // files
			} // my_target 
		},  // uglify
		watch: {
				options: { livereload: true },
				css: {
					files: ['_/css/*.css'],
					tasks: []
				},
				scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']	
				}, //scripts
				html: {
					files: ['index.html']
				} //html
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports

//hello