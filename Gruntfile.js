module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('src/package.json'),
    nodewebkit: {
      options: {
        build_dir: './dist',
        mac: true,
        win: false,
        linux32: false,
        linux64: false
      },
      src: './public/**/*'
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: true
          }
        },
        files: [
        {
          cwd: "views/jade",
          src: ["**/*.jade", "!index.jade"],
          dest: "public/templates",
          expand: true,
          ext: ".html"
        },{
          cwd: "views/jade",
          src: "index.jade",
          dest: "public",
          expand: true,
          ext: ".html"
        },]
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          flattern: true,
          cwd: 'bower_components/bootstrap/dist/css/',
          src: ['bootstrap.min.css', 'bootstrap-theme.min.css'],
          dest: 'public/css/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'bower_components/bootstrap/dist/js/',
          src: ['bootstrap.min.js', 'bootstrap.js'],
          dest: 'public/js/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'bower_components/jquery/dist/',
          src: ['jquery.js', 'jquery.min.js', 'jquery.min.map'],
          dest: 'public/js/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'bower_components/backbone/',
          src: ['backbone.js'],
          dest: 'public/js/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'bower_components/underscore/',
          src: ['underscore.js'],
          dest: 'public/js/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'bower_components/requirejs/',
          src: ['require.js'],
          dest: 'public/js/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'bower_components/text/',
          src: ['text.js'],
          dest: 'public/js/libs/'
        }, {
          expand: true,
          flattern: true,
          cwd: 'src/',
          src: ['**/*'],
          dest: 'public/'
        }]
      }
    },
    replace: {
      requirejs: {
        src: ['public/js/libs/require.js'],
        overwrite: true,
        replacements: [{
          from: 'var requirejs, require, define;',
          to: 'var requirejs, define;'
        }]  
      }
    },
    'npm-install': {
      default: {
        src: "src/"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-npm-install');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['npm-install', 'jade', 'copy', 'replace', 'nodewebkit']);
}