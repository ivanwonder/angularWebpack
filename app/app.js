import angular from 'angular'
import alert from 'angular-ui-bootstrap/src/alert';
import 'bootstrap-css'
import edit from './components/editData/edit'
import item from './common/items/item'

class AppCtrl {
  constructor(Item) {
    this.Item = Item
    this.data = Item.getAllItem()
    this.alerts = []
  }

  closeAlert(index){
    this.alerts.splice(index, 1);
  }

  submit(data){
    this.Item.addItem([data])
  }
}

AppCtrl.$inject = ['Item']

var myapp = angular.module("myapp",[alert,edit.name,item.name])
myapp.controller('infoShow',AppCtrl)
