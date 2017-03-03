import Ember from 'ember';
import layout from '../templates/components/uni-dropdown';

const { Component } = Ember;

export default Component.extend({
  classNames: ['uni-dropdown'],
  classNameBindings: [
    'isOpen:uni-dropdown--active',
    'isAbsolute:uni-dropdown--absolute'
  ],
  layout,

  isOpen: false,
  selected: null,
  placeholder: null,
  options: [],
  btnClass: '',
  onChange() {},
  onClick() {},

  actions: {
    buttonClick() {
      this.toggleProperty('isOpen');

      this.get('onClick')();
    },

    optionClick(option) {
      this.toggleProperty('isOpen');
      this.set('selected', option);

      this.get('onChange')(option);
    }
  }
});
