module.exports = function(grunt) { 


require('load-grunt-tasks')(grunt);
//grunt.loadNpmTasks('grunt-contrib-less');    
//grunt.loadNpmTasks('grunt-autoprefixer');
//    grunt.loadNpmTasks('grunt-combine-media-queries');
    
grunt.registerTask('default', [
    'less', 'autoprefixer', 'cmq', 'csscomb', 'cssmin'
]);
    
grunt.initConfig({
    less: {
        build: {
            files: { 
                'css/main.css': ['less/main.less'] 
            }
        }            
    },
    autoprefixer: {
        options: {
            browsers: ['last 2 versions']
        },
        build: {
            src: 'css/main.css'
        } 
    },
    cmq: {
        build: {
            files: {
                'css/main.css': ['css/main.css']
            }
        }
    },
    csscomb: {
        build: {
            options: {
                config: '.csscomb.json'
            },
            files: {
                 'css/main.css': ['css/main.css']
            }
        }
    },
    cssmin: {
        build: {
            options: {
                keepSpecialComment: 0,
                report: 'gzip'
            },
            files: {
                 'css/main.min.css': ['css/main.css']
            }
        }
    }

}); 
    
};