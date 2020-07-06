
module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          './style/style.css': './style/style.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['./style/scss/*.scss'],
        tasks: ['sass'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
}