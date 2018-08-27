import React from 'react';
import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/CommentList';


  describe('CommentList', () => {

    let component

    beforeEach(() => {
      const props = { comments: ['New Comment', 'second'] }
      component = renderComponent(CommentList,null,props);
    });

    it('shows an LI for each comment', () => {
      expect(component.find('li').length).equal(2);
    });
    
    
    it('shows each comment', () => {
      expect(component).to.contain('New Comment');
      //expect(component).to.contain('second');
    });


  });

