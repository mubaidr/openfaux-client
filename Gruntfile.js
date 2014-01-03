/* jshint node: true */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      src: {
        options: {
          jshintrc: true,
          ignores: 'node_modules/**' 
        },
        src: ['**/*.js']
      }
    },
    jscs: {
      gruntfile: {
        src: ['Gruntfile.js']
      },
      src: {
        src: ['**/*.js']
      }
    },
    copy: {
      chrome: {
        src: 'chrome/**',
        dest: 'dist/'
      }
    },
    zip: {
      'dist/chrome.crx': 'chrome/'
    }
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('dist', ['copy', 'zip']);
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['dist', 'test']);
};