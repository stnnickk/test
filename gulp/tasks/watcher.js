export const watcher = () => {
    app.gulp.watch(app.path.watch.html).on('change', app.exportedTasks.html)
    app.gulp.watch(app.path.watch.scss).on('change', app.exportedTasks.scss)
    app.gulp.watch(app.path.watch.js).on('change', app.exportedTasks.js)

    app.gulp.watch(app.path.watch.html).on('change', app.plugins.browsersync.reload)
    app.gulp.watch(app.path.watch.scss).on('change', app.plugins.browsersync.reload)
    app.gulp.watch(app.path.watch.js).on('change', app.plugins.browsersync.reload)
}