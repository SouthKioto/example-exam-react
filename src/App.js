import { useState } from 'react';
import { Device } from './components/Device';
import { SelectedDevice } from './components/SelectedDevice';
import './css/style.css';

function App() {
  const [descVisibility, setDescVisibility] = useState(false);
  const [selectedDeviceData, setSelectedDeviceData] = useState();
  const [buttonVis, setButtonVis] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState([
    {
      name: 'SuperOdkurzacz 3000',
      description: 'Niezawodny odkurzacz o dużej mocy.',
      price: '500 zł',
      rating_value: 2.5,
      source: './images/odkurzacz.jpg',
    },
    {
      name: 'TurboPralka X1',
      description: 'Energooszczędna pralka z funkcją szybkiego prania.',
      price: '1200 zł',
      rating_value: 4.5,
      source: './images/pralka.jpg',
    },
  ]);

  //console.log(deviceInfo[0]);

  const handleSelectDevice = deviceData => {
    setDescVisibility(true);
    setButtonVis(true);
    setSelectedDeviceData(deviceData);
  };

  const handleCloseDescription = () => {
    setDescVisibility(false);
    setButtonVis(false);
    setSelectedDeviceData(null);
  };

  return (
    <>
      {deviceInfo.map((data, index) => (
        <Device device_data={data} handlerSelect={() => handleSelectDevice(data)} buttonEnabled={buttonVis} />
      ))}

      {descVisibility && (
        <SelectedDevice selectedDeviceData={selectedDeviceData} handlerEnableButton={handleCloseDescription} />
      )}
    </>
  );
}

export default App;
