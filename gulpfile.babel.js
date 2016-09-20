import gulp from 'gulp';
import del from 'del';
import webpack from 'webpack';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import connect from 'gulp-connect';

import webpackConfigs from './support/webpack';
import expressAsMiddleware from './support/server/express';
import dir from './support/path';

gulp.task('clean', () => del.sync(dir.DIST.BASE));

gulp.task('image', () => {
    gulp.src(dir.IMAGE)
        .pipe(gulp.dest(dir.DIST.IMG));
});

gulp.task('css', () => {
    gulp.src(dir.CSS)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(dir.DIST.CSS));
});

gulp.task('html', () => {
    gulp.src(dir.HTML)
        .pipe(gulp.dest(dir.DIST.BASE));
});

gulp.task('build', () => {
    webpack(webpackConfigs, (err, stats) => {
        if (err) {
            console.log('[Error]: ', err);
        }
        gutil.log(stats.toString({
            colors: true,
            progress: true
        }));
    });
});

gulp.task('watch', () => {
    gulp.watch([dir.JS, dir.TEMPLATE], ['build']);
    gulp.watch([dir.HTML], ['html']);
    gulp.watch([dir.CSS], ['css']);
    gulp.watch([dir.IMAGE], ['image']);
});

gulp.task('default', ['clean', 'build', 'html', 'css', 'image', 'watch'], () => {
    expressAsMiddleware.bind(connect, dir.DIST.BASE);
});
