const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function () {
    return gulp.src('../src/theme/theme.less')
        .pipe(less({
            javascriptEnabled: true
        }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions', 'ie > 8']
            })
        )
        .pipe(cleanCSS())
        .pipe(rename('cui.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    return gulp.src('../src/theme/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});


gulp.task('imgs', function () {
    return gulp.src('../src/theme/imgs/*.*')
        .pipe(gulp.dest('../dist/styles/imgs'));
});

gulp.task('default', gulp.parallel('css', 'fonts', 'imgs'));