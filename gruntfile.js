module.exports = function(grunt) {
    grunt.initConfig({
        path: {
            css: 'public/css',
            distcss: 'public/css/dist',
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
                    '<%=path.distcss%>/sass-style.css': '<%=path.css%>/**/*.scss'
                }
            }
        },
        postcss: {
           options: {
               processors: [
                   require('autoprefixer')({
                       browsers: ['last 2 versions']
                   })
               ]
           },
           dist: {
               src: '<%=path.distcss%>/*.css'
           }
        },
        browserify:{
            options: {
                transform:['babelify', 'browserify-shim']
            },
            dev:{
                options:{
                    browserifyOptions: {
                        debug: true,
                        paths: ['<%=path.js%>']
                    }
                },
                files: {
                    '<%=path.distjs%>/app.js': '<%=path.js%>/script.js'
                }
            }
        },
        watch: {
            express: {
                files:  ['public/**/*.*', '!<%=path.distjs%>/**/*.*'],
                tasks:  ['default'],
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
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'postcss', 'browserify', 'express', 'watch:express']);
};
