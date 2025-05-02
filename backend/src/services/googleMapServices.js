//Todo: write a function to get distance and time between two locations using google maps api
export const calculateTripPlan = async (origin,destination) =>{
    return {
        origin,
        destination,
        distance: "500 km",
        estimatedTime: "6 hrs",
        suggestedStops: ["Rest Stop A", "City B"]
      };
}