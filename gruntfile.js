module.exports = function(grunt) {
    grunt.initConfig({
        express: {
            dev: {
                options: {
                    script: './server.js'
                }
            }
        },
        watch: {
            express: {
                files:  [ 'public/**/*.*' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['express','watch:express']);
};
