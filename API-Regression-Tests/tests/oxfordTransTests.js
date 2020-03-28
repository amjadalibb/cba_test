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
		endpoint: endpoints.translations.replace('{source_lang_translate}', 'en-gb').replace('{target_lang_translate}', 'es').replace('{word_id}', "test"),
		headers: credentials
	},
	optionsInvalid: {
		method: 'get',
		baseURL: URLs.oxfordBaseUrl,
		endpoint: endpoints.translations.replace('{source_lang_translate}', 'en-gb').replace('{target_lang_translate}', 'es').replace('{word_id}', "ThisWordDoesNotExist"),
		headers: credentials
	},
	optionsBadRequest: {
		method: 'get',
		baseURL: URLs.oxfordBaseUrl,
		endpoint: endpoints.translations.replace('{source_lang_translate}', 'en-gb').replace('{target_lang_translate}', 'es').replace('{word_id}', "test"),
		headers: credentials,
		params: {
			grammaticalFeatures: 'UnknownFilter'
		}
	}
}

module.exports = { SCENARIOS }
