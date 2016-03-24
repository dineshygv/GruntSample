module.exports = function (grunt)
{
	var jstSource = ['templates/**/*.html'];
	
	grunt.initConfig(
	{
		jst :
		{
			compile :
			{				
				files :
				{
					"compiled/templates.js" : jstSource
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