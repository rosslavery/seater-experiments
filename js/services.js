'use strict';

/* Services */

angular.module('seater.services', []).service('planService', function () {

	var plans = {
		"tables" : [	
			{
				"id" : 23,
				"number" : 2,
				"shape" : "circle",
				"xPos" : "20%",
				"yPos" : "50%",
				"rotate" : "45deg",
				"seats" : [1,2]
			},
			{
				"id" : 48,
				"number" : 4,
				"shape" : "rect",
				"xPos" : "90%",
				"yPos" : "30%",
				"rotate" : "90deg",
				"seats" : [3,4,5,6]
			}
		],
		"guests" : [
			{
				"id" : 1,
				"name" : "Ross"
			},
			{
				"id" : 2,
				"name" : "Thomas"
			},
			{
				"id" : 3,
				"name" : "Ken"
			},
			{
				"id" : 4,
				"name" : "Susheila"
			},
			{
				"id" : 5,
				"name" : "George"
			},
			{
				"id" : 6,
				"name" : "Lavery"
			}
		]
	}

    return {

        all : function () {
            return plans;
        },

        table : function(tableId) {

        },

        seat : function(tableId, seatIndex) {

        },

        guest : function(tableId, seatIndex) {

        },

        addNote : function (noteTitle) {
            var currentIndex = data.length + 1;
            data.push({
                id:currentIndex, title:noteTitle
            });
        },

        deleteNote : function (id) {
            var oldNotes = data;
            data = [];

            angular.forEach(oldNotes, function (note) {
                if (note.id !== id) data.push(note);
            });
        }
    };
});