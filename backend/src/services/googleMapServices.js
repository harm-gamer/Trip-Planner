//Todo: write a function to get distance and time between two locations using google maps api
import axios from 'axios';
export const calculateTripPlan = async (origin,destination) =>{
  const apiKey = process.env.GOOGLE_MAPS_API_KEY2;

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        origins: origin,
        destinations: destination,
        key: apiKey,
        units: 'metric',
      },
    });

    const data = response.data;
    // console.log(response);
    console.log(data);

    if (data.status !== 'OK') throw new Error('Failed to fetch distance matrix.');

    const result = data.rows[0].elements[0];

    if (result.status !== 'OK') throw new Error('Invalid origin/destination.');

    return {
      distance: result.distance.text,  // e.g., "432 km"
      duration: result.duration.text,  // e.g., "5 hours 32 mins"
    };

  } catch (error) {
    console.error('Google Maps API error:', error.message);
    throw error;
  }
}
