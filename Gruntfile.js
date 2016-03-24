module.exports = function (grunt)
{
	var jstSource = ['templates/**/*.html'];
	var path = require('path');
	
	grunt.initConfig(
	{
		jst :
		{
			compile :
			{				
				files :
				{
					"compiled/templates.js" : jstSource
				},
				options:
				{
					processName: function(filepath) {
						return path.basename(filepath, '.html');
					}
				}
			}
		},
		watch :
		{
			files : jstSource,
			tasks : ['jst']
		}
	}
	);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jst');

	grunt.registerTask('default', ['jst']);

};