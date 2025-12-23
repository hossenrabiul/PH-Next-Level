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
--
--

SELECT * FROM vehicles WHERE status = 'available' OR status = 'maintenance';
--
--
SELECT * FROM vehicles WHERE type = 'car' AND status = 'available'
--
--
SELECT vehicle_name, COUNT(*) AS total_bookings FROM bookings JOIN vehicles USING(vehicle_id) GROUP BY vehicle_name HAVING COUNT(*) > 2