import React from 'react';
import { renderComponent, expect } from '../test_helper'
import { mount } from 'enzyme';
import CommentBox from '../../src/components/CommentBox';
//import Root from 'Root';

let wrapped;
let component;

beforeEach(() => {
  wrapped = renderComponent(CommentBox);
});

afterEach(() => {
  // wrapped.unmount();
});

it('hs correct component', () => {
  expect(wrapped).to.have.class('comment-box');
});


it('has a text area and two buttons', () => {
  expect(wrapped.find('button')).to.exist;
});

it('has textarea', () => {
  expect(wrapped.find('textarea')).to.exist;
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', 'new comment');
  });

  it('shows text in textarea', () => {
    expect(wrapped.find('textarea')).to.have.value('new comment');
  });

  it('when submitted clears the text areas', () => {
    wrapped.simulate('submit');
    expect(wrapped.find('textarea')).to.have.value('');
  });
});
