import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export const UsersOpinions = ({ rating_value }) => {
  return (
    <div className='rating-container'>
      <Stack spacing={1}>
        <p className='heading'>Oceny użytkowników</p>
        <Rating name='half-rating-read' defaultValue={rating_value} precision={0.5} readOnly />
      </Stack>
    </div>
  );
};
