require('dotenv').config();
const { URLs, endpoints } = require('../fixtures/urls.js');

const credentials = {
	app_id: process.env.APPID,
	app_key: process.env.KEY
}

const SCENARIOS = {
	optionsValid: {
		method: 'get',
		baseURL: URLs.oxfordBaseUrl,
		endpoint: endpoints.entries.replace('{source_lang}', 'en-gb').replace('{word_id}', "Insurance"),
		headers: credentials
	},
	optionsInvalid: {
		method: 'get',
		baseURL: URLs.oxfordBaseUrl,
		endpoint: endpoints.entries.replace('{source_lang}', 'en-gb').replace('{word_id}', "ThisWordDoesNotExist"),
		headers: credentials
	},
	optionsBadRequest: {
		method: 'get',
		baseURL: URLs.oxfordBaseUrl,
		endpoint: endpoints.entries.replace('{source_lang}', 'en-gb').replace('{word_id}', "Insurance"),
		headers: credentials,
		params: {
			grammaticalFeatures: 'UnknownFilter'
		}
	}
}

module.exports = { SCENARIOS }
