import { calculateTripPlan } from '../services/googleMapServices.js';

export const planTrip = async (req, res) => {
  const { origin, destination } = req.body;

  try {
    const tripPlan = await calculateTripPlan(origin, destination);
    res.status(200).json(tripPlan);
  } catch (err) {
    res.status(500).json({ message: 'Trip planning failed', error: err.message });
  }
};
