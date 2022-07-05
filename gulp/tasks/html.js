import fileInclude from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import versionNumber from 'gulp-version-number'

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.errorsHandling('HTML'))
        .pipe(fileInclude())
        .pipe(htmlmin({
            collapseWhitespace: app.isBuild ? true : false
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js'
                        ],
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.plugins.replace(/@images\//g, 'images/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.replace(/.jpg/g, '.webp')
        ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.replace(/.jpeg/g, '.webp')
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.replace(/.png/g, '.webp')
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}