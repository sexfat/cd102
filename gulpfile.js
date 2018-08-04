var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var gulpImagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
// (2)
// gulp.task('watch' ,function(){
//     gulp.watch(['./sass/*.scss' ,'./sass/**/*.scss'], ['sass']);
// });


gulp.task('image', function () {
  gulp.src('images/*.{png,jpg,gif,ico}')
      .pipe(gulpImagemin())
      .pipe(gulp.dest('img/'));
});





gulp.task('lint', function () {
  return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(gulp.dest('js/assets/'));
});



// (3)瀏覽器同步
gulp.task('default', ['sass'], function () {

    browserSync.init({
      server: {
        //根目錄
        baseDir: "./",
        index: "index.html"
      }
    });
  
    gulp.watch(["sass/*.scss", "sass/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("js/*.js", ['lint']).on('change', reload);
    // gulp.watch("images/*").on('change', reload);
  });



//(4)
gulp.task('imagec' ,['image']);

 