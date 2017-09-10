angular
  .module("websiteApp", [])
  .controller("HomeController", function ($scope) {

    var vm = this;

    vm.category = {
      hiking: 'hiking',
      school: 'school',
      datascience: 'data science'
    };

    vm.display = display;

    function display(type) {
      switch(type) {
        case vm.category.hiking:
          //alert('display the hiking photos');
          break;
        case vm.category.school:
          alert('display the school');
          break;
        case vm.category.datascience:
          alert('display data science stuff');
          break;
      }
    }


  });
