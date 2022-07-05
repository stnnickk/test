import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { errorsHandling } from './gulp/config/errorsHandling.js'

// Tasks.
import { watcher } from './gulp/tasks/watcher.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { js } from './gulp/tasks/js.js'
import { scss } from './gulp/tasks/scss.js'
import { server } from './gulp/tasks/server.js'
import { images } from './gulp/tasks/images.js'
import { zip } from './gulp/tasks/zip.js'

// Plugins.
import { plugins } from './gulp/config/plugins.js'

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    errorsHandling: errorsHandling,
    plugins: plugins,

    exportedTasks: {
        html: html,
        scss: scss,
        js: js
    }
}

const mainTasks = gulp.parallel(html, scss, js, images)

// Scenarios.
const dev = gulp.series(
    reset,
    mainTasks,
    gulp.parallel(
        watcher,
        server
    )
)
const build = gulp.series(
    reset,
    mainTasks
)
const deployZIP = gulp.series(
    reset, 
    mainTasks, 
    zip
)

export { dev }
export { build }
export { deployZIP }

gulp.task('default', dev)