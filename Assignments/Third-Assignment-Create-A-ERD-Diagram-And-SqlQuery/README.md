<!-- First qury -->
SELECT
  booking_id,
  user_name,
  vehicle_name,
  start_date,
  end_date,
  status
FROM
  bookings
  JOIN users ON bookings.user_id = users.user_id
  JOIN vehicles ON bookings.vehicle_id = vehicles.vehicle_id
<!-- Explanation -->
* This query retrives complete bookings data by combining data from three tables 
1. Bookings for all booking information;
2. Users for Bookings customer information;
3. Vehicles for Booking Vehicle information;


<!-- Second query -->
SELECT * FROM vehicles WHERE status = 'available' OR status = 'maintenance';
<!-- Explanation -->
* This query retirves all the vehicles that are currently avaiable or under maintenance'


<!-- Third query -->
SELECT * FROM vehicles WHERE type = 'car' AND status = 'available'
<!-- Explanation -->
* This query retrives those vehicles that type is car and currently available


<!-- Fourth query -->
SELECT vehicle_name, COUNT(*) AS total_bookings FROM bookings JOIN vehicles USING(vehicle_id) GROUP BY vehicle_name HAVING COUNT(*) > 2
<!-- Explanation -->
* This query retrives most popular vehicles that have been booked more that 2 times.