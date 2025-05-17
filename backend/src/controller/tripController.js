// import { calculateTripPlan } from '../services/googleMapServices.js';
import { getDistanceAndDuration } from '../services/googleMapServices.js';
export const planTrip = async (req, res) => {
  const { origin, destination } = req.body;
    console.log(req.body);
  try {
    const tripPlan = await getDistanceAndDuration(origin, destination);
    res.status(200).json(tripPlan);
  } catch (err) {
    res.status(500).json({ message: 'Trip planning failed', error: err.message });
  }
};
