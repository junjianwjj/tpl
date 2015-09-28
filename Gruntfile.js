/*
 * grunt-tpl
 * https://github.com/junjianwjj/tpl
 *
 * Copyright (c) 2015 junjian.wjj
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['build']
    },

    // Configuration to be run (and then tested).
    tpl: {
      all: {
        files: [{
          expand: true,
            cwd: 'src',
            src: ['*.html','*/*.html', '*/*/*.html'],
            dest: 'src',
            ext: '.js'
          }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['src/*.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['tpl', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
