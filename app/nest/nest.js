function nestController() {
    var $ctrl = this;

    function processTabs() {
        $ctrl.tabs = angular.copy($ctrl.sourceData.tabs);
        
                $ctrl.tabs = $ctrl.tabs.map(function(tab, tabIndex){
        
                    if(tabIndex <= 1) {
                        tab.disabled = false;
                    } else {
                        tab.disabled = true;
                    }
        
                    if(tab.disabled) {
                        delete tab.accordions;
                    } else {
                    tab.accordions = tab.accordions.map(function (accordion, accordionIndex){
                        
        
                        if(accordionIndex % 2 === 0) {
                            accordion.open = true;
                        } else {
                            accordion.open = false;
                        }
        
                        if(!accordion.open) {
                            accordion.disabled = true;
                        } else {
                            accordion.disabled = false;
                        }
        
                        return accordion;
                    });
                }
                    return tab;
                });
    }

    $ctrl.$onInit = function() {
        console.log('loading nesting controller');
        processTabs()
    }

    $ctrl.$onChanges = function(changes) {
        console.log('changing nesting controller');
        if(changes.sourceData.isFirstChange()) {
            return;
        } else if (changes.sourceData) {
            processTabs();
        }
    }
}

angular.module('app.nest').component('nest', {
    templateUrl: 'app/nest/nest.html',
    bindings: {
        sourceData: '<'
    },
    controller: nestController
})