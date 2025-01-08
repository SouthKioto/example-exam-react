import React from 'react';

export const Device = ({ device_data, handlerSelect, buttonEnabled }) => {
  return (
    <div className='device-item'>
      {device_data && (
        <>
          <img src={device_data.source} alt={device_data.name} />
          <div className='button-container'>
            <button onClick={handlerSelect} disabled={buttonEnabled && 'disabled'}>
              Wybierz
            </button>
          </div>
        </>
      )}
    </div>
  );
};
