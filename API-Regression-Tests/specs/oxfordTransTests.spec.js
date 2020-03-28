const { requestAPI } = require('../support/api.js');
const { expect } = require('chai');
const { expectSnapshot, httpStatus, report } = require('../support');
const { SCENARIOS } = require('../tests/oxfordTransTests.js')

describe('Oxford Dictionary Tests for Translations', function() {
	it('Get translation for word test', async function() {
		report(this, 'API Options BaseURL', SCENARIOS.optionsValid.baseURL);
		report(this, 'API Options Endpoint', SCENARIOS.optionsValid.endpoint);
		const response = await requestAPI(SCENARIOS.optionsValid);
		report(this, 'API response', response.data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0].translations[0].text);
		expect(response.status).to.equal(httpStatus.OK);
		expectSnapshot(response.data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0].translations[0].text).toMatchSnapshot(this);
	});

	it('Get translation for an invalid word ThisWordDoesNotExist', async function() {
		report(this, 'API Options BaseURL', SCENARIOS.optionsInvalid.baseURL);
		report(this, 'API Options Endpoint', SCENARIOS.optionsInvalid.endpoint);
		const response = await requestAPI(SCENARIOS.optionsInvalid);
		report(this, 'API response', response.data);
		expect(response.status).to.equal(httpStatus.NOT_FOUND);
		expectSnapshot(response.data).toMatchSnapshot(this);
	});

	it('Bad request on getting entries of word', async function() {
		report(this, 'API Options BaseURL', SCENARIOS.optionsBadRequest.baseURL);
		report(this, 'API Options Endpoint', SCENARIOS.optionsBadRequest.endpoint);
		report(this, 'API Options Params', SCENARIOS.optionsBadRequest.params);
		const response = await requestAPI(SCENARIOS.optionsBadRequest);
		report(this, 'API response', response.data);
		expect(response.status).to.equal(httpStatus.BAD_REQUEST);
		expectSnapshot(response.data).toMatchSnapshot(this);
	});
});