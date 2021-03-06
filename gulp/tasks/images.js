import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.errorsHandling('IMAGES'))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webp()
            )
        )
        .pipe(app.gulp.dest(app.path.build.images)) 
        // .pipe(app.gulp.src(app.path.src.images))
        // .pipe(app.plugins.newer(app.path.build.images))
        // .pipe(imagemin({
        //     progressive: true,
        //     svgPlugins: [{removeViewBox: false}],
        //     interlaced: true,
        //     optimizateionLevel: 3
        // }))
        // .pipe(app.gulp.dest(app.path.build.images))
        // .pipe(app.gulp.src(app.path.src.svg))
        // .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream())
}