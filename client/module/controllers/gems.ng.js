angular.module("app").controller("gemsCtrl",
    function($scope, $meteor, $modal) {
        $scope.searchTerm = '';

        $scope.page = 1;
        $scope.perPage = 3;
        $scope.sort = {
            name: -1
        };

        //set the scope parameter here
        $scope.gems = $meteor.collection(function() {
            //as need to sort the data from the client side also
            return Gems.find({}, {
                sort : $scope.getReactively('sort')
            });
        });

        $meteor.autorun($scope, function() {
            $meteor.subscribe('gems', {
                limit: parseInt($scope.getReactively('perPage')),
                skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('searchTerm')).then(function() {
                $scope.numberOfGems = $meteor.object(Counts, 'numberOfGems', false);
            });
        });

        $scope.deleteGem = function(gem) {
            $scope.gems.remove({
                _id: gem._id
            });
        };
        $scope.edit = function(gem) {
            gem.editMode = !gem.editMode;
            _.each($scope.gems, function(value) {
                if (value !== gem) {
                    value.editMode = false;
                }
            });
        };
        $scope.save = function(gem) {
            if (gem && gem.name && gem.about) {
                return;
            }
            gem.editMode = false;
            $scope.gems.save(gem);
            $scope.closeModal();
        };
        $scope.deleteAll = function() {
            $scope.gems.remove();
        };
        $scope.openAddModel = function() {
            $scope.modalInstance = $modal.open({
                animation: true,
                scope: $scope,
                templateUrl: 'client/module/views/newGem.ng.html'
            });
        };
        $scope.closeModal = function() {
            $scope.modalInstance.dismiss('cancel');
        };
        $scope.pageChanged = function(newPage) {
            $scope.page = newPage;
            console.log('here ::' + $scope.page);
        };
    }
);
