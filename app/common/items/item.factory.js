import angular from 'angular'

class itemFactory {
  constructor() {
    this.items = [{id:'1',name:'item1'},
                  {id:'2',name:'item2'},
                {id:'3',name:'item3'}]
  }

  _search(data){
    var len = this.items.length
    for(let i=0;i<len;i++){
      if(this.items[i].id === data.id){
        return this.items[i]
      }
    }
    return ''
  }

  getAllItem(){
    return this.items
  }

  addItem(data){
    let item = this._search(data)
    if (item) {
      angular.extend(item,data)
    }else {
      this.items.push(data)
    }
  }

}

export default itemFactory
