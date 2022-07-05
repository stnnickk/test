import del from 'del'
import zipPlugin from 'gulp-zip'

export const zip = () => {
    delete(`./${app.path.rootFolder}.zip`)
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.errorsHandling('ZIP'))      
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'))
}