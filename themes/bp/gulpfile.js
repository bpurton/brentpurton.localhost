/* file: gulpfile.js */
var gulp               = require('gulp'),
    compass            = require('gulp-compass');
    gulpFilter         = require('gulp-filter');
    uglify             = require('gulp-uglify');
    rename             = require('gulp-rename');
    mainBowerFiles     = require('main-bower-files');


var dest_path =  'dist';

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['compass']);
});

// // build css
// gulp.task('build-css', function() {
//   return gulp.src('sass/*.scss')
//     .pipe(sourcemaps.init())  // Process the original sources
//       .pipe(sass())
//     .pipe(sourcemaps.write()) // Add the map to modified source.
//     .pipe(gulp.dest('css'));
// });



// gulp.task('js', function() {

//   var jsFilter = gulpFilter('**/*.js');
//   return gulp.src(mainBowerFiles())

//   // grab vendor js files from bower_components, minify and push in /public
//   .pipe(jsFilter)
//   .pipe(uglify({
//     preserveComments: "some"
//   }))
//   .pipe(rename({
//       suffix: ".min"
//   }))
//   .pipe(gulp.dest(dest_path + '/js/'))
// });



gulp.task('compass', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'dist/css',
      sass: 'src/sass'
    }))
    .pipe(gulp.dest('dist/css'));
});



// Set defualt gulp task to watch
gulp.task('default', ['watch']);