
//
//var gulp = require('gulp'), // ����������� Gulp JS
//    jade = require('gulp-jade'), // ������ ��� Jade
//    less = require('gulp-less'), // ������ ��� Stylus
//    imagemin = require('gulp-imagemin'), // ����������� �����������
//    concat = require('gulp-concat'); // ������� ������
//
//
////  less
//gulp.task('less', function() {
//    gulp.src('app/css/*.less')
//
//});
//
//// � Jade
//
//    gulp.task('jade', function() {
//        gulp.src('app/*.jade')
//
//    });
//
//
//
//// JS
//    gulp.task('js', function() {
//        gulp.src('app/js/*.*')
//
//
//    });
//
//
//
////  �����������
//
//    gulp.task('images', function() {
//        gulp.src('app/img/*')
//
//
//    });
//// font
//
//gulp.task('font', function() {
//    gulp.src('app/font/*')
//
//
//});
//
//gulp.task('audio', function() {
//    gulp.src('app/audio/*')
//
//
//});
//
//// ������ ������� ���������� gulp watch
//    gulp.task('watch', function() {
//        // ��������������� ������ �������
//        gulp.watch('less');
//        gulp.watch('jade');
//        gulp.watch('images');
//        gulp.watch('js');
//
//
//    });
//
//
//
//    gulp.task('build', function() {
//        // css
//        gulp.src('app/css/*.less')
//            .pipe(less())
//            .pipe(gulp.dest('dist/css/'));
//
//        // jade
//        gulp.src('app/*.jade')
//            .pipe(jade({
//            pretty: true
//        }))  // �������� Jade ������ � ����� app
//            .pipe(gulp.dest('dist/'));
//
//        // js
//        gulp.src('app/js/*.*')
//            .pipe(gulp.dest('dist/js'));
//
//
//
//        // image
//        gulp.src('app/img/*')
//            .pipe(imagemin())
//            .pipe(gulp.dest('dist/img'));
//
//        // �����
//        gulp.src('app/font/*')
//            .pipe(gulp.dest('dist/font'));
//
//
//    });
//
//gulp.task('default', ['watch']);


'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'app/*.jade',
        js: 'app/js/*.js',
        style: 'app/css/*.less',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    watch: {
        html: 'app/*.jade',
        js: 'app/js/*.js',
        style: 'app/css/common/*.less',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(less({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch']);