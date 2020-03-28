const URLs = {
  oxfordBaseUrl: 'https://od-api.oxforddictionaries.com:443/api/v2'
}

const endpoints = {
	entries: '/entries/{source_lang}/{word_id}',
	translations: '/translations/{source_lang_translate}/{target_lang_translate}/{word_id}'
}

module.exports = {
	URLs, endpoints
}