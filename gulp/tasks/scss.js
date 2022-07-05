import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import rename from 'gulp-rename'

export const scss = () => {
    const sass = gulpSass(dartSass)

    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.errorsHandling('SCSS'))
        .pipe(sass({
            outputStyle: app.isBuild ? 'compressed' : 'expanded'
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}