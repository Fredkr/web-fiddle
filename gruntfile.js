module.exports = function(grunt) {
    grunt.initConfig({
        express: {
            dev: {
                options: {
                    script: './server.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/css/sass-style.css': 'public/**/*.scss'
                }
            }
        },
        watch: {
            express: {
                files:  [ 'public/**/*.*' ],
                tasks:  [ 'sass', 'express:dev'  ],
                options: {
                    spawn: false
                }
            },
            options: {
                livereload: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'express', 'watch:express']);
};
