import {renderComponent, expect} from '../test_helper'
import App from '../../src/components/app'

//use describe to group together similar tests
describe('Testing App', ()=>{

  let component;

  beforeEach(() => {
    component = renderComponent(App);
 });


  //use it to test single attribute of a target
  it('shows a comment box', ()=>{

      //use expect to make assertion about target
      expect (component.find('.comment-box')).to.exist;
      //throw new Error
  })
  it('shows a comment list', ()=>{

    //use expect to make assertion about target
    expect (component.find('.comment-list')).to.exist;
    //throw new Error
})

});

