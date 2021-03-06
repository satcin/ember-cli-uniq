import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';
import layout from '../templates/components/uni-datepicker';

export default Component.extend({
  layout,

  classNames: ['uni-datepicker'],

  center: moment(),
  selected: moment(),
  minDate: moment(),
  maxDate: moment().add(2, 'years'),
  weekdayFormat: 'min',
  dateFormat: 'MMMM YYYY',
  showDaysAround: true,
  disabledDates: [],

  isFirstMonth: computed('center', function() {
    return this.get('center').isSame(this.get('minDate'), 'month') ? 'disabled' : '';
  }),
  isLastMonth: computed('center', function() {
    return this.get('center').isSame(this.get('maxDate'), 'month') ? 'disabled' : '';
  }),

  onSelect() {},
  onCenter() {},

  actions: {
    nextMonth() {
      this.get('onCenter')(this.get('center').clone().add(1, 'month'));
    },

    prevMonth() {
      this.get('onCenter')(this.get('center').clone().add(-1, 'month'));
    }
  }
});
