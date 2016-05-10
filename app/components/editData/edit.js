import style from '../../css/bootstrap.css'
import template from './edit.html'
import editController from './edit.controller'
import angular from 'angular'

class editDirective {
  constructor() {
    this.restrict = 'E'
    this.template = template
    this.scope = {
      edit:'=edit',
      submit:'&submit'
    }
    this.controller = editController
    this.controllerAs = 'editController'
    this.bindToController = true
  }
  link(scope, element, attrs){
    console.log(scope);
  }
}

export default angular.module('edit',[]).directive('editData',()=>new editDirective())
