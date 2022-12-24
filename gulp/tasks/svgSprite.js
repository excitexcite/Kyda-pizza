import svgSprite from 'gulp-svg-sprite';

export const svgSpriteCreate = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(svgSprite({
			mode: {
				stack: {
					// sprite: `../icons/icons.svg`,
					sprite: `../icons.svg`,
					// create table with icons` list
					example: true
				}
				// symbol: {
				// 	sprite: `../icons/icons.svg`,
				// 	example: true,
				// 	render: {
				// 		scss: true // Activate Sass output (with default options)
				// 	}
				// },
			},
			// shape: {
			// 	dimension: { // Set maximum dimensions
			// 		maxWidth: 32,
			// 		maxHeight: 32
			// 	},
			// 	transform: [
			// 		{
			// 			svgo: {
			// 				plugins: [
			// 					{
			// 						removeAttrs: {
			// 							attrs: ['class', 'data-name', 'fill', 'stroke.*'],
			// 						}
			// 					}
			// 				]
			// 			}
			// 		}
			// 	]
			// }
		}
		))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}