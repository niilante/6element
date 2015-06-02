// autogenerated by sql-generate v1.0.0 on Tue Jun 02 2015 18:14:03 GMT+0200 (CEST)

var sql = require('sql');


/**
 * SQL definition for public.affluence_sensor_measurements
 */
exports.affluence_sensor_measurements = sql.define({
	name: 'affluence_sensor_measurements',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'sensor_id' },
		{ name: 'signal_strengths' },
		{ name: 'measurement_date' }
	]
});


/**
 * SQL definition for public.lifecycle
 */
exports.lifecycle = sql.define({
	name: 'lifecycle',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' }
	]
});


/**
 * SQL definition for public.recycling_centers
 */
exports.recycling_centers = sql.define({
	name: 'recycling_centers',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'name' },
		{ name: 'lat' },
		{ name: 'lon' }
	]
});


/**
 * SQL definition for public.sensors
 */
exports.sensors = sql.define({
	name: 'sensors',
	columns: [
		{ name: 'created_at' },
		{ name: 'updated_at' },
		{ name: 'id' },
		{ name: 'name' },
		{ name: 'installed_at' },
		{ name: 'phone_number' }
	]
});


