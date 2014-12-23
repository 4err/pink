module.exports = function(grunt) { 


require('load-grunt-tasks')(grunt);

grunt.registerTask('default', [
    'less'
]);
    
grunt.initConfig({
    less: {
        style: {
            files: { 
                'css/main.css': ['less/main.less'] 
            }
        }            
    }

}); 

};