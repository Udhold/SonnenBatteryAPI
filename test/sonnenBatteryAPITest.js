const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const axios = require('axios');
const SonnenBatteryAPI = require('../lib/SonnenBatteryAPI');

describe('SonnenBatteryAPI', () => {
	let sonnenBattery;
	let axiosInstance;

	before(() => {
		axiosInstance = axios.create();
		sonnenBattery = new SonnenBatteryAPI('mock-server-ip', 'mock-server-port', 'mock-auth-token');
		sonnenBattery.instance = axiosInstance; // Replace instance with a mock instance
	});

	afterEach(() => {
		sinon.restore();
	});

	it('should set and get operating mode', async () => {
		// Mock a successful PUT request
		sinon.stub(axiosInstance, 'put').resolves({ data: { status: 'success' } });

		const mode = 'mode_value';
		const response = await sonnenBattery.setOperatingMode(mode);
		expect(response).to.have.property('status', 'success');

		// Mock a successful GET request
		sinon.stub(axiosInstance, 'get').resolves({ data: mode });

		const fetchedMode = await sonnenBattery.getOperatingMode();
		expect(fetchedMode).to.equal(mode);
	});

	it('should handle errors when setting operating mode', async () => {
		// Mock a failed PUT request
		sinon.stub(axiosInstance, 'put').rejects({ response: { status: 500, data: { error: 'Internal Server Error' } } });

		const mode = 'mode_value';
		try {
			await sonnenBattery.setOperatingMode(mode);
		} catch (error) {
			expect(error.response.status).to.equal(500);
			expect(error.response.data.error).to.equal('Internal Server Error');
		}
	});

	// Add more test cases for other functions
});
