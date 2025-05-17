const axios = require('axios');

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api';

/**
 * Gets distance and duration from Distance Matrix API
 * @param {string} origin - The starting location
 * @param {string} destination - The destination location
 * @returns {Promise<{ distance: string, duration: string, distanceValue: number, durationValue: number }>}
 */
const getDistanceAndDuration = async (origin, destination) => {
  try {
    const response = await axios.get(`${BASE_URL}/distancematrix/json`, {
      params: {
        origins: origin,
        destinations: destination,
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    const element = response.data.rows[0].elements[0];

    if (element.status !== 'OK') {
      throw new Error('Invalid location or no route found');
    }

    return {
      distance: element.distance.text,
      duration: element.duration.text,
      distanceValue: element.distance.value, // in meters
      durationValue: element.duration.value, // in seconds
    };
  } catch (err) {
    console.error('Error in getDistanceAndDuration:', err.message);
    throw err;
  }
};

/**
 * Gets detailed route information from Directions API
 * @param {string} origin
 * @param {string} destination
 * @param {string[]} [waypoints]
 * @returns {Promise<object>} route details
 */
const getRouteDetails = async (origin, destination, waypoints = []) => {
  try {
    const response = await axios.get(`${BASE_URL}/directions/json`, {
      params: {
        origin,
        destination,
        key: GOOGLE_MAPS_API_KEY,
        waypoints: waypoints.join('|'),
        optimizeWaypoints: true,
      },
    });

    if (response.data.status !== 'OK') {
      throw new Error('Failed to fetch route directions');
    }

    return response.data.routes[0];
  } catch (err) {
    console.error('Error in getRouteDetails:', err.message);
    throw err;
  }
};

module.exports = {
  getDistanceAndDuration,
  getRouteDetails,
};
