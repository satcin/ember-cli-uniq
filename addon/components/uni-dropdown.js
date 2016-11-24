import Ember from 'ember';
import layout from '../templates/components/uni-dropdown';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-dropdown'],
  layout,

  isOpen: false,
  selected: null,
  options: [],
  extraBtnClasses: '',
  placeholderComponent: 'uni-dropdown-placeholder-simple'
});
