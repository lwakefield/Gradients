module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            build: {
                files: {
                    'gradients.css': 'gradients.less'
                }
            }
        },

        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'gradients.min.css': 'gradients.css'
                }
            }
        },

        watch: {

            stylesheets: {
                files: ['**/*.css', '**/*.less'],
                tasks: ['less', 'cssmin']
            }
            
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'cssmin']);
};