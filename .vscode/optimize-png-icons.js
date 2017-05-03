/**
 * Png icons compression
 */

const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

imagemin(['./icons/*.{jpg,png}'], './icons', {
	plugins: [
		imageminJpegtran(),
		imageminPngquant()
	]
}).then(files => {
	console.log(files)
})
