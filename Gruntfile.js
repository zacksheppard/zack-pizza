module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        style: 'compact',
        files: {
          'assets/prod/css/main.css': 'assets/dev/scss/main.scss'
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,  
      },
      dist: {
        files: {
          'assets/prod/js/main.js': 'assets/dev/js/main.js'
        }
      }
    }

  });

  grunt.registerTask('default', ['css', 'js']);
  grunt.registerTask('js', ['babel']);
  grunt.registerTask('css', ['sass']);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');



};