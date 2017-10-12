var dataModel = {
    tabs: [
        {
            name: 'Tab 1',
            accordions: [
                {
                    name: 'Accordion 1,1',
                    fields: [
                        {
                            name: 'Field 1,1,1'
                        },
                        {
                            name: 'Field 1,1,2'
                        },
                        {
                            name: 'Field 1,1,3'
                        },
                        {
                            name: 'Field 1,1,4'
                        }
                    ]
                },
                {
                    name: 'Accordion 1,2',
                    fields: [
                        {
                            name: 'Field 1,2,1'
                        },
                        {
                            name: 'Field 1,2,2'
                        },
                        {
                            name: 'Field 1,2,3'
                        },
                        {
                            name: 'Field 1,2,4'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Tab 2',
            accordions: [
                {
                    name: 'Accordion 2,1',
                    fields: [
                        {
                            name: 'Field 2,1,1'
                        },
                        {
                            name: 'Field 2,1,2'
                        },
                        {
                            name: 'Field 2,1,3'
                        },
                        {
                            name: 'Field 2,1,4'
                        }
                    ]
                },
                {
                    name: 'Accordion 2,2',
                    fields: [
                        {
                            name: 'Field 2,2,1'
                        },
                        {
                            name: 'Field 2,2,2'
                        },
                        {
                            name: 'Field 2,2,3'
                        },
                        {
                            name: 'Field 2,2,4'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Tab 3',
            accordions: [
                {
                    name: 'Accordion 3,1',
                    fields: [
                        {
                            name: 'Field 3,1,1'
                        },
                        {
                            name: 'Field 3,1,2'
                        },
                        {
                            name: 'Field 3,1,3'
                        },
                        {
                            name: 'Field 3,1,4'
                        }
                    ]
                },
                {
                    name: 'Accordion 3,2',
                    fields: [
                        {
                            name: 'Field 3,2,1'
                        },
                        {
                            name: 'Field 3,2,2'
                        },
                        {
                            name: 'Field 3,2,3'
                        },
                        {
                            name: 'Field 3,2,4'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Tab 4',
            accordions: [
                {
                    name: 'Accordion 4,1',
                    fields: [
                        {
                            name: 'Field 4,1,1'
                        },
                        {
                            name: 'Field 4,1,2'
                        },
                        {
                            name: 'Field 4,1,3'
                        },
                        {
                            name: 'Field 4,1,4'
                        }
                    ]
                },
                {
                    name: 'Accordion 4,2',
                    fields: [
                        {
                            name: 'Field 4,2,1'
                        },
                        {
                            name: 'Field 4,2,2'
                        },
                        {
                            name: 'Field 4,2,3'
                        },
                        {
                            name: 'Field 4,2,4'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Tab 5',
            accordions: [
                {
                    name: 'Accordion 5,1',
                    fields: [
                        {
                            name: 'Field 5,1,1'
                        },
                        {
                            name: 'Field 5,1,2'
                        },
                        {
                            name: 'Field 5,1,3'
                        },
                        {
                            name: 'Field 5,1,4'
                        }
                    ]
                },
                {
                    name: 'Accordion 5,2',
                    fields: [
                        {
                            name: 'Field 5,2,1'
                        },
                        {
                            name: 'Field 5,2,2'
                        },
                        {
                            name: 'Field 5,2,3'
                        },
                        {
                            name: 'Field 5,2,4'
                        }
                    ]
                }
            ]
        }
    ]
}

function appController() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.data = dataModel;
        console.log('Data in app: ' + $ctrl.data);
    }

    $ctrl.changeDataModel = function() {
        var newDataModel = angular.copy(dataModel);
        newDataModel.tabs.map(function(tab, tabIndex) {
            tab.name = "New Tab " + tabIndex+1;
            return tab;
        });
        $ctrl.data = newDataModel;
    }
}

angular.module('app').component('app', {
    templateUrl: 'app/app.html',
    controller: appController
})