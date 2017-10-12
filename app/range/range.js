function rangeController() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        
    }
}

angular.module('app').component('range', {
    templateUrl: 'app/range/range.html',
    controller: rangeController,
    bindings: {
        required: '<'
    }
})