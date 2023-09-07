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
### `getOperatingMode()`

- **Description**: Fetches the current operating mode of the Sonnen battery system.
- **Usage**:
  ```javascript
  const mode = await sonnenBattery.getOperatingMode();
  console.log('Operating mode:', mode);
  ```

### `getBatteryInfo()`

- **Description**: Fetches battery information.
- **Usage**:
  ```javascript
  const batteryInfo = await sonnenBattery.getBatteryInfo();
  console.log('Battery information:', batteryInfo);
  ```

### `getBatteryStatus()`

- **Description**: Fetches battery status information.
- **Usage**:
  ```javascript
  const batteryStatus = await sonnenBattery.getBatteryStatus();
  console.log('Battery status:', batteryStatus);
  ```

### `getInverterInfo()`

- **Description**: Fetches inverter information.
- **Usage**:
  ```javascript
  const inverterInfo = await sonnenBattery.getInverterInfo();
  console.log('Inverter information:', inverterInfo);
  ```

### `getLatestData()`

- **Description**: Fetches the latest data from the Sonnen battery system.
- **Usage**:
  ```javascript
  const latestData = await sonnenBattery.getLatestData();
  console.log('Latest data:', latestData);
  ```

### `getConfigurations()`

- **Description**: Fetches the system configurations.
- **Usage**:
  ```javascript
  const configurations = await sonnenBattery.getConfigurations();
  console.log('Configurations:', configurations);
  ```

### `setOperatingMode(mode)`

- **Description**: Sets the operating mode of the Sonnen battery system.
- **Usage**:
  ```javascript
  await sonnenBattery.setOperatingMode('mode_value');
  ```

### `setPrognosisCharging(enabled)`

- **Description**: Sets the prognosis charging.
- **Usage**:
  ```javascript
  await sonnenBattery.setPrognosisCharging(true);
  ```

### `setMicrogridReEnable(enabled)`

- **Description**: Sets the microgrid re-enable.
- **Usage**:
  ```javascript
  await sonnenBattery.setMicrogridReEnable(true);
  ```

### `setTimeOfUseSchedule(schedule)`

- **Description**: Sets the time-of-use schedule.
- **Usage**:
  ```javascript
  await sonnenBattery.setTimeOfUseSchedule(schedule);
  ```

### `setUserInputTimeOne(time)`

- **Description**: Sets user input time one.
- **Usage**:
  ```javascript
  await sonnenBattery.setUserInputTimeOne(time);
  ```

### `setUserInputTimeTwo(time)`

- **Description**: Sets user input time two.
- **Usage**:
  ```javascript
  await sonnenBattery.setUserInputTimeTwo(time);
  ```

### `setUserInputTimeThree(time)`

- **Description**: Sets user input time three.
- **Usage**:
  ```javascript
  await sonnenBattery.setUserInputTimeThree(time);
  ```

### `setSOC(soc)`

- **Description**: Sets the state of charge.
- **Usage**:
  ```javascript
  await sonnenBattery.setSOC(soc);
  ```

### `setCHPMaxSOC(maxSOC)`

- **Description**: Sets maximum SOC for combined heat and power.
- **Usage**:
  ```javascript
  await sonnenBattery.setCHPMaxSOC(maxSOC);
  ```

### `setCHPMinSOC(minSOC)`

- **Description**: Sets minimum SOC for combined heat and power.
- **Usage**:
  ```javascript
  await sonnenBattery.setCHPMinSOC(minSOC);
  ```

### `setGeneratorType(generatorType)`

- **Description**: Sets generator type.
- **Usage**:
  ```javascript
  await sonnenBattery.setGeneratorType(generatorType);
  ```

### `setGeneratorPowerSetPoint(powerSetPoint)`

- **Description**: Sets generator power set point.
- **Usage**:
  ```javascript
  await sonnenBattery.setGeneratorPowerSetPoint(powerSetPoint);
  ```

### `setUSMicrogridReEnable(enabled)`

- **Description**: Sets the re-enable microgrid for the US system.
- **Usage**:
  ```javascript
  await sonnenBattery.setUSMicrogridReEnable(true);
  ```

### `setUSUserInputTimeOne(time)`

- **Description**: Sets user input time one for the US system.
- **Usage**:
  ```javascript
  await sonnenBattery.setUSUserInputTimeOne(time);
  ```

### `setUSUserInputTimeTwo(time)`

- **Description**: Sets user input time two for the US system.
- **Usage**:
  ```javascript
  await sonnenBattery.setUSUserInputTimeTwo(time);
  ```

### `setUSUserInputTimeThree(time)`

- **Description**: Sets user input time three for the US system.
- **Usage**:
  ```javascript
  await sonnenBattery.setUSUserInputTimeThree(time);
  ```

### `setFixedPowerFactor(factor)`

- **Description**: Sets fixed power factor.
- **Usage**:
  ```javascript
  await sonnenBattery.setFixedPowerFactor(factor);
  ```

### `setFixedPowerFactorActive(active)`

- **Description**: Sets the active state of fixed power factor.
- **Usage**:
  ```javascript
  await sonnenBattery.setFixedPowerFactorActive(true);
  ```

### `setFixedPowerFactorLagging(lagging)`

- **Description**: Sets the lagging state of fixed power factor.
- **Usage**:
  ```javascript
  await sonnenBattery.setFixedPowerFactorLagging(true);
  ```

### `setHeaterOperatingMode(mode)`

- **Description**: Sets heater operating mode.
- **Usage**:
  ```javascript


  await sonnenBattery.setHeaterOperatingMode(mode);
  ```

### `setHeaterTemperatureMax(temperature)`

- **Description**: Sets maximum heater temperature.
- **Usage**:
  ```javascript
  await sonnenBattery.setHeaterTemperatureMax(temperature);
  ```

### `setHeaterTemperatureMin(temperature)`

- **Description**: Sets minimum heater temperature.
- **Usage**:
  ```javascript
  await sonnenBattery.setHeaterTemperatureMin(temperature);
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
