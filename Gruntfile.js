module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: 1600,
						suffix: '_large_1x',
						quality: 30
					},{
						width: 1600,
						suffix: '_large_2x',
						quality: 60
					},{
						width: 800,
						suffix: '_medium_1x',
						quality: 30
					},{
						width: 800,
						suffix: '_medium_2x',
						quality: 60
					},{
						width: 400,
						suffix: '_small',
						quality: 40
					}]
				},

				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		},

		clean: {
			dev: {
		  	src: ['images'],
		  },
		},

		mkdir: {
		  dev: {
				options: {
					create: ['images']
				},
			},
		},

		watch: {
			scripts: {
				files: ['css/*.css', 'index.html', 'js/*.js'],
				options: {
					livereload: 9090,
				},
			},
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css'],
					dest: 'dist/css',
					ext: '.min.css',
				}],
			},
		},

		critical: {
			test: {
				options: {
					base: './',
					css: [
						'css/main.css',
						'css/custom.css'
					],
				},
				src: 'test/index.html',
				dest: 'test/generated/index-critical.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-critical');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};