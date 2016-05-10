import angular from 'angular'

class itemFactory {
  constructor() {
    this.items = [{id:1,name:'item1'},
                  {id:2,name:'item2'},
                {id:3,name:'item3'}]
  }

  getAllItem(){
    return this.items
  }

  addItem(data){
    angular.extend(this.items,data)
  }

}

export default itemFactory
