'use strict';

var centroid = require('turf-centroid');

module.exports = function(entries){

	return entries.map(function(entry){
		entry.properties.origin = 'OSM';

		if (entry.properties.type === 'way'){
			var point = centroid(entry);
			point.properties = entry.properties;

			return point;
		}
		else
			return entry;
	});
};
