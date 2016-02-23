'use strict';

class CreateEventCtrl {

    constructor($scope, NgMap) {
        var self   = this;
        this.today = new Date();
        this.event = {};

        //FIXME: Didnt' find a way to do it without $scope because of the date-picker plugin
        $scope.dates = [];

        $scope.removeDate = function(date) {
            var i = $scope.dates.length;
            while(i--) {
                if($scope.dates[i].isSame(date)) {
                    $scope.dates.splice(i, 1);
                }
            }
        };

        $scope.addDate = function(date) {
            $scope.dates.push(date);
        };

        $scope.dateSelected = function(event, date) {
            event.preventDefault();
            date.selected = !date.selected;
            date.selected ? $scope.addDate(date) : $scope.removeDate(date);
        };

        this.$scope = $scope;

        self.placeChanged = function() {
            google.maps.event.trigger(self.map, 'resize');
            self.event.place = this.getPlace(); // "this" will be a place

            var marker = new google.maps.Marker();
            marker.setPosition(self.event.place.geometry.location);
            marker.setMap(self.map);

            self.map.setCenter(self.event.place.geometry.location);
        };

        NgMap.getMap().then(function(map) {
            self.map = map;
        });
    }

    saveDates() {
        this.event.dates = this.$scope.dates;
    }

    finishedWizard() {
        console.log('finished!');
        console.log(this.event);
    }
}

angular.module('eventoLFrontendApp')
    .controller('CreateEventCtrl', CreateEventCtrl);
