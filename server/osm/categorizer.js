'use strict';

var fs = require('fs');

// var points = require('../../data/osmDataConverted.json').features;
var makeMap = require('../../tools/makeMap');

var categories = require('../../references/categories.json');
var synonymMap = makeMap(require('../../references/synonyms.json'));

var invCatMap = new Map();

// Build inverted categories Map
categories.forEach(function(category){
	category.objects.forEach(function(subCategory){
		invCatMap.set(subCategory, category.name);
	});
});

function categorizer(inputPoints){
	var unknown_tags = {};

	var newPoints = inputPoints.map(function(point){
		var lat = point.geometry.coordinates[1];
		var lon = point.geometry.coordinates[0];
		
		var tags = point.properties.tags;
		var pointForDB = {
			osm_id: point.properties.id,
			name: point.properties.tags.name,
			operator: point.properties.tags.operator,
			source: point.properties.tags.source,
			type: point.properties.tags.recycling_type,
			opening_hours: point.properties.tags.opening_hours,
			bins: [],
			lat: lat,
			lon: lon,
			geom: 'POINT(' + lon + ' ' + lat + ')'
		};

		var pointCategories = new Map();

		Object.keys(tags).forEach(function(tagKey){
			var match = tagKey.match(/^recycling:(.*)/); // check if the tag matches the RegExp 'recycling:*'

			if (match){ // if a match is found
				var subCat = match[1];

				if (synonymMap.has(subCat))
					subCat = synonymMap.get(subCat);

				if (invCatMap.get(subCat) === undefined) // if tag is unknown, count how many occurences
					unknown_tags[subCat] = unknown_tags[subCat] ? unknown_tags[subCat] + 1 : 1;

				if (tags[tagKey] === 'yes'){ // check if the tag is ON
					var mainCat = invCatMap.get(subCat);

					if (pointCategories.has(mainCat))
						pointCategories.get(mainCat).push(subCat);
					else
						pointCategories.set(mainCat, [subCat]);
				}
			}
		});


		pointCategories.forEach(function(subCategories, mainCategory){
			pointForDB.bins.push({
				id: mainCategory + '_1',
				t: mainCategory, // type
				a: true, // availability
				o: subCategories, // objects accepted
			});
		});

		return pointForDB;
	});

	console.log('Unknown tags', unknown_tags);
	fs.writeFile(__dirname + '../../data/unknownOSMtags.json', JSON.stringify(unknown_tags));

	return newPoints;
}

// categorizer(points);

module.exports = categorizer;
