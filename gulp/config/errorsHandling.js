export const errorsHandling = (title) => {
    return app.plugins.plumber(
        app.plugins.notify.onError({
            title: title,
            message: 'Error: <%= error.message %>'
        })
    )
}