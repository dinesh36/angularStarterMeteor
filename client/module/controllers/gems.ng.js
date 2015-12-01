angular.module("app").controller("gemsCtrl",
    function($scope, $meteor, $modal) {
        $scope.searchTerm = 'a';

        //set the scope parameter here
        $scope.gems = $meteor.collection(Gems);

        $meteor.autorun($scope, function() {
            //add search parameter
            $meteor.subscribe('gems', $scope.getReactively('searchTerm'));
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
    }
);
