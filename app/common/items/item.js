import angular from 'angular'
import itemFactory from './item.factory'

export default angular.module('item',[]).factory('Item',()=>new itemFactory()).name
