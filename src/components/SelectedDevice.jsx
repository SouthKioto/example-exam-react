import React from 'react';
import { UsersOpinions } from './UsersOpinions';

export const SelectedDevice = ({ selectedDeviceData, handlerEnableButton }) => {
  return (
    <div className='selected-device container'>
      <p>Wybrane urządzenie: {selectedDeviceData.name}</p>
      <p>{selectedDeviceData.description}</p>
      <p>Cena: {selectedDeviceData.price}</p>

      <UsersOpinions rating_value={selectedDeviceData.rating_value} />

      <button className='return-button' onClick={handlerEnableButton}>
        Powrót
      </button>
    </div>
  );
};
