var mongoose = require('mongoose');

module.exports = mongoose.model('Contenido', {
	titulo: {type: String},
	descripcion: {
		texto: {type: String},
		img: {type: String}
	},
	video: {
		enlace: {type: String}
	}
})