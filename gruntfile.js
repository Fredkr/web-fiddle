module.exports = function(grunt) {
    grunt.initConfig({
        path: {
            css: 'dev/sass',
            js: 'public/js',
            distjs: 'public/js/dist',
            concat: '<%=path.distjs%>/concat-script.js'
        },
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
        concat: {
            options: {
                expand: true
            },
            js: {
                src: ['<%=path.js%>/*.js'],
                dest: '<%=path.concat%>'
            }
        },
        babel: {
            options: {
                modules: 'common',
                stage: 0
            },
            dist: {
                files: {
                    '<%=path.distjs%>/app.js': '<%=path.concat%>'
                }
            }
        },
        watch: {
            express: {
                files:  [ 'public/**/*.*', '!<%=path.distjs%>' ],
                tasks:  [ 'express:dev' ],
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
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'concat', 'babel', 'express', 'watch:express']);
};
