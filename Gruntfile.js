
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: 'webapp/index.html'
            }
        },
        concat: {
            js: {
                src: ['webapp/app.js', 'webapp/**/*.js', 'webapp/app.config.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        uglify: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },
        watch: {
            files: ['webapp/**/*.*'],
            tasks: ['clean', 'concat'],
            options: {
                livereload: true
            }
        },
        clean: {
            folder: ['build/']
        },
        nodemon: {
            prod: {
                script: 'index.js'
            }
        }
    });

    grunt.registerTask('dev', ['clean', 'wiredep', 'concat', 'uglify', 'watch']);
    grunt.registerTask('default', ['nodemon']);

};