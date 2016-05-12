export default class editController {
  constructor($scope,$element){
    this.id = '1'
    this.name = 'hello'
    console.log($scope);
    console.log($element);
  }

  click(){
    let param = {}
    param.data = {
      id:this.id,
      name:this.name
    }
    this.submit(param)
    // this.edit.push()
  }

}

editController.$inject = ['$scope','$element']
