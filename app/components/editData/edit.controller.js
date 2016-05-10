export default class editController {
  constructor(){
    this.id = '1'
    this.name = 'hello'
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
