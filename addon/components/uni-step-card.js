import Ember from 'ember';
import layout from '../templates/components/uni-step-card';

const { Component } = Ember;

export default Component.extend({
  tagName: 'article',
  classNames: ['uni-step-card'],
  classNameBindings: ['isComplete:uni-step-card--passed', 'isDisabled:uni-step-card--disabled'],
  layout,

  isComplete: false,
  isDisabled: false
});
