const axios = require('axios');

class SonnenBatteryAPI{
	constructor(serverIp, serverPort, authToken) {
		this.serverIp = serverIp;
		this.serverPort = serverPort;
		this.authToken = authToken;

		// Create an Axios instance with default headers
		this.instance = axios.create({
			baseURL: `http://${this.serverIp}:${this.serverPort}/api/v2`,
			headers: {
				'Auth-Token': this.authToken
			}
		});
		this.instance.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response) {
					console.error('Unauthorized or Forbidden');
					return false;
				}
				return Promise.reject(error);
			}
		);
	}
	async getOperatingMode() {
		try {
			const response = await this.instance.get('/configurations/EM_OperatingMode');
			return response.data;
		} catch (error) {
			console.error('Error fetching operating mode:', error);
			throw error;
		}
	}
	// Example function for getting battery status
	async getBatteryInfo() {
		try {
			const response = await this.instance.get('/battery');
			return response.data;
		} catch (error) {
			console.error('Error fetching battery status:', error);
			throw error;
		}
	}
	async getBatteryStatus() {
		try {
			const response = await this.instance.get('/status');
			return response.data;
		} catch (error) {
			console.error('Error fetching battery status:', error);
			throw error;
		}
	}
	async getInverterInfo() {
		try {
			const response = await this.instance.get('/inverter');
			return response.data;
		} catch (error) {
			console.error('Error fetching battery status:', error);
			throw error;
		}
	}
	async getLatestData() {
		try {
			const response = await this.instance.get('/latestdata');
			return response.data;
		} catch (error) {
			console.error('Error fetching battery status:', error);
			// throw error;
		}
	}
	async getConfigurations() {
		try {
			const response = await this.instance.get('/configurations');
			return response.data;
		} catch (error) {
			console.error('Error fetching battery status:', error);
			throw error;
		}
	}
	async getPowerMeter() {
		try {
			const response = await this.instance.get('/powermeter');
			return response.data;
		} catch (error) {
			console.error('Error fetching battery status:', error);
			throw error;
		}
	}
	// Helper function to make a PUT request with data
	async putData(endpoint, data) {
		try {
			const response = await this.instance.put(endpoint, data);
			return response.data;
		} catch (error) {
			console.error(`Error updating configuration (${endpoint}):`, error);
			throw error;
		}
	}

	// EM_OperatingMode: Set the operating mode
	async setOperatingMode(mode) {
		const data = { EM_OperatingMode: mode };
		return this.putData('/configurations', data);
	}

	// EM_Prognosis_Charging: Set the prognosis charging
	async setPrognosisCharging(enabled) {
		const data = { EM_Prognosis_Charging: enabled };
		return this.putData('/configurations', data);
	}

	// EM_RE_ENABLE_MICROGRID: Set the microgrid re-enable
	async setMicrogridReEnable(enabled) {
		const data = { EM_RE_ENABLE_MICROGRID: enabled };
		return this.putData('/configurations', data);
	}

	// EM_ToU_Schedule: Set the time-of-use schedule
	async setTimeOfUseSchedule(schedule) {
		const data = { EM_ToU_Schedule: schedule };
		return this.putData('/configurations', data);
	}

	// EM_USER_INPUT_TIME_ONE: Set user input time one
	async setUserInputTimeOne(time) {
		const data = { EM_USER_INPUT_TIME_ONE: time };
		return this.putData('/configurations', data);
	}

	// EM_USER_INPUT_TIME_TWO: Set user input time two
	async setUserInputTimeTwo(time) {
		const data = { EM_USER_INPUT_TIME_TWO: time };
		return this.putData('/configurations', data);
	}

	// EM_USER_INPUT_TIME_THREE: Set user input time three
	async setUserInputTimeThree(time) {
		const data = { EM_USER_INPUT_TIME_THREE: time };
		return this.putData('/configurations', data);
	}

	// EM_USOC: Set the state of charge
	async setSOC(soc) {
		const data = { EM_USOC: soc };
		return this.putData('/configurations', data);
	}

	// EM_US_CHP_Max_SOC: Set maximum SOC for combined heat and power
	async setCHPMaxSOC(maxSOC) {
		const data = { EM_US_CHP_Max_SOC: maxSOC };
		return this.putData('/configurations', data);
	}

	// EM_US_CHP_Min_SOC: Set minimum SOC for combined heat and power
	async setCHPMinSOC(minSOC) {
		const data = { EM_US_CHP_Min_SOC: minSOC };
		return this.putData('/configurations', data);
	}

	// EM_US_GENRATOR_TYPE: Set generator type
	async setGeneratorType(generatorType) {
		const data = { EM_US_GENRATOR_TYPE: generatorType };
		return this.putData('/configurations', data);
	}

	// EM_US_GEN_POWER_SET_POINT: Set generator power set point
	async setGeneratorPowerSetPoint(powerSetPoint) {
		const data = { EM_US_GEN_POWER_SET_POINT: powerSetPoint };
		return this.putData('/configurations', data);
	}

	// EM_US_RE_ENABLE_MICROGRID: Set the re-enable microgrid for the US system
	async setUSMicrogridReEnable(enabled) {
		const data = { EM_US_RE_ENABLE_MICROGRID: enabled };
		return this.putData('/configurations', data);
	}

	// EM_US_USER_INPUT_TIME_ONE: Set user input time one for the US system
	async setUSUserInputTimeOne(time) {
		const data = { EM_US_USER_INPUT_TIME_ONE: time };
		return this.putData('/configurations', data);
	}

	// EM_US_USER_INPUT_TIME_TWO: Set user input time two for the US system
	async setUSUserInputTimeTwo(time) {
		const data = { EM_US_USER_INPUT_TIME_TWO: time };
		return this.putData('/configurations', data);
	}

	// EM_US_USER_INPUT_TIME_THREE: Set user input time three for the US system
	async setUSUserInputTimeThree(time) {
		const data = { EM_US_USER_INPUT_TIME_THREE: time };
		return this.putData('/configurations', data);
	}

	// NVM_PfcFixedCosPhi: Set fixed power factor
	async setFixedPowerFactor(factor) {
		const data = { NVM_PfcFixedCosPhi: factor };
		return this.putData('/configurations', data);
	}

	// NVM_PfcIsFixedCosPhiActive: Set the active state of fixed power factor
	async setFixedPowerFactorActive(active) {
		const data = { NVM_PfcIsFixedCosPhiActive: active };
		return this.putData('/configurations', data);
	}

	// NVM_PfcIsFixedCosPhiLagging: Set the lagging state of fixed power factor
	async setFixedPowerFactorLagging(lagging) {
		const data = { NVM_PfcIsFixedCosPhiLagging: lagging };
		return this.putData('/configurations', data);
	}

	// SH_HeaterOperatingMode: Set heater operating mode
	async setHeaterOperatingMode(mode) {
		const data = { SH_HeaterOperatingMode: mode };
		return this.putData('/configurations', data);
	}

	// SH_HeaterTemperatureMax: Set maximum heater temperature
	async setHeaterTemperatureMax(temperature) {
		const data = { SH_HeaterTemperatureMax: temperature };
		return this.putData('/configurations', data);
	}

	// SH_HeaterTemperatureMin: Set minimum heater temperature
	async setHeaterTemperatureMin(temperature) {
		const data = { SH_HeaterTemperatureMin: temperature };
		return this.putData('/configurations', data);
	}


}

module.exports = SonnenBatteryAPI;
