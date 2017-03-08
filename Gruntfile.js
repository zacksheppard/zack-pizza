module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // CSS Tasks
    sass: {
      dist: {
        style: 'compact',
        files: {
          'assets/prod/css/main.css': 'assets/dev/scss/main.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/prod/css/main.min.css' : 'assets/prod/css/main.css'
        }
      }
    },

    // JavaScript Tasks
    babel: {
      options: {
        sourceMap: true,  
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          'assets/prod/js/main.js': 'assets/dev/js/main.js'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'assets/prod/js/main.js' : ['assets/dev/js/main.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js','assets/dev/js/*.js']
    },

    
    watch: {
      css: {
        files: 'assets/dev/scss/**/*.scss',
        tasks: ['css']
      },
      js: {
        files: 'assets/dev/js/**/*.js',
        tasks: ['js']
      }
    }

  });

  grunt.registerTask('default', ['css', 'js']);
  grunt.registerTask('js', ['babel']);
  grunt.registerTask('css', ['sass','cssmin']);
  grunt.registerTask('jslint', ['jshint']);
  grunt.registerTask('watch', ['watch']);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');



};