function addTripToUserPlan(index) {
  const selectedTrip = destinations[index];
  
  // جلب الأنشطة الحالية
  let activities = JSON.parse(localStorage.getItem('userActivities')) || [];

  // إضافة الرحلة الجديدة كنشاط
  activities.push({
    title: selectedTrip.name,
    desc: `Confirmed booking for ${selectedTrip.country || 'Destination'}.`,
    time: "Booked Tour",
    icon: "explore",
    tag: "Booked Trip",
    price: Number(selectedTrip.price),
    image: selectedTrip.image
  });

  localStorage.setItem('userActivities', JSON.stringify(activities));
  alert(`"${selectedTrip.name}" has been added to your Itinerary and Budget!`);
}