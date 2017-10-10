
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: 'webapp/index.html'
            }
        },
        concat: {
            js: {
                src: ['webapp/**/*.js'],
                dest: 'build/<%= pkg.name %>-<%= grunt.template.today("dd-mm-yyyy") %>.js'
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
            tasks: ['wiredep', 'concat', 'uglify'],
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('dev', ['wiredep', 'uglify', 'watch']);

};