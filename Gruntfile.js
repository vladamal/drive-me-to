
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ['build/', 'webapp/<%= pkg.name %>.min.js']
        },
        wiredep: {
            target: {
                src: 'webapp/index.html'
            }
        },
        concat: {
            js: {
                src: ['webapp/app.js', 'webapp/app-config/*.js', 'webapp/routes/**/*.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        uglify: {
            dist: {
                src: 'build/<%= pkg.name %>.min.js',
                dest : 'webapp/<%= pkg.name %>.min.js'

            }
        },
        copy: {
            files: {
                src: 'build/<%= pkg.name %>.min.js',
                dest: 'webapp/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            files: ['webapp/**/*.*'],
            tasks: ['clean', 'concat', 'copy'],
            options: {
                livereload: true
            }
        },
        nodemon: {
            prod: {
                script: 'index.js'
            }
        }
    });

    grunt.registerTask('dev', ['concat', 'copy', 'watch']);
    grunt.registerTask('c', ['clean']);
    grunt.registerTask('default', ['clean', 'wiredep', 'concat', 'uglify', 'nodemon']);

};