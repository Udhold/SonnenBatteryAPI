# Sonnen Battery API

The `sonnen-battery-api` package allows you to interact with Sonnen's Battery API v2 to control various configuration elements of your Sonnen battery system. This package simplifies communication with the Sonnen API and provides an easy-to-use Node.js interface.

## Installation

To use this package in your Node.js project, you can install it via npm:

```bash
npm install sonnen-battery-api
```
## Usage

```javascript
const SonnenBatteryAPI = require('sonnen-battery-api');

// Initialize the SonnenBatteryAPI class with your server details and authentication token
const sonnenBattery = new SonnenBatteryAPI('your-server-ip', 'your-server-port', 'your-auth-token');

// Example: Set the operating mode
sonnenBattery.setOperatingMode('mode_value')
  .then(data => {
    console.log('Operating mode set:', data);
  })
  .catch(error => {
    console.error('Error:', error);
});
```

## Battery Configuration Elements

Here are some of the available configuration elements that you can control using this package:

- `EM_OperatingMode`: Set the operating mode.
- `EM_Prognosis_Charging`: Set the prognosis charging.
- `EM_RE_ENABLE_MICROGRID`: Set the microgrid re-enable.
- `EM_ToU_Schedule`: Set the time-of-use schedule.
- `EM_USER_INPUT_TIME_ONE`: Set user input time one.
- `EM_USER_INPUT_TIME_TWO`: Set user input time two.
- `EM_USER_INPUT_TIME_THREE`: Set user input time three.
- `EM_USOC`: Set the state of charge.
- `EM_US_CHP_Max_SOC`: Set maximum SOC for combined heat and power.
- `EM_US_CHP_Min_SOC`: Set minimum SOC for combined heat and power.
- `EM_US_GENRATOR_TYPE`: Set generator type.
- `EM_US_GEN_POWER_SET_POINT`: Set generator power set point.
- `EM_US_RE_ENABLE_MICROGRID`: Set the re-enable microgrid for the US system.
- `EM_US_USER_INPUT_TIME_ONE`: Set user input time one for the US system.
- `EM_US_USER_INPUT_TIME_TWO`: Set user input time two for the US system.
- `EM_US_USER_INPUT_TIME_THREE`: Set user input time three for the US system.
- `NVM_PfcFixedCosPhi`: Set fixed power factor.
- `NVM_PfcIsFixedCosPhiActive`: Set the active state of fixed power factor.
- `NVM_PfcIsFixedCosPhiLagging`: Set the lagging state of fixed power factor.
- `SH_HeaterOperatingMode`: Set heater operating mode.
- `SH_HeaterTemperatureMax`: Set maximum heater temperature.
- `SH_HeaterTemperatureMin`: Set minimum heater temperature.

Please refer to the Sonnen Battery API documentation for more details on these configuration elements.

## License

This package is open-source and available under the [MIT License](LICENSE).
