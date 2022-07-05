import * as nodePath from 'path'
const rootfolder = nodePath.basename(nodePath.resolve())

const buildFolder = './build'
const srcFolder = './src'

export const path = {
    build: {
        html: `${buildFolder}/`,
        js: `${buildFolder}/js`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/images/`,
    },
    src: {
        html: `${srcFolder}/html/*.html`,
        js: `${srcFolder}/js/index.js`,
        scss: `${srcFolder}/scss/index.scss`,
        images: `${srcFolder}/images/**/*.{png, jpg, jpeg, gif, webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/**/*.scss`,
        images: `${srcFolder}/images/**/*.{png, jpg, jpeg, gif, webp, svg}`,
        files: `${srcFolder}/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootfolder: rootfolder,
    ftp: ``
}