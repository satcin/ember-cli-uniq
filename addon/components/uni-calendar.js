import Component from '@ember/component';
import layout from '../templates/components/uni-calendar';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  layout,

  showAbove: false,
  startDate: moment(),
  endDate: null,
  showDatepicker: false,
  minimumDays: 0,

  dateRange: computed('startDate', 'endDate', function() {
    return moment.range(this.get('startDate'), this.get('endDate'));
  }),

  actions: {
    getDateAndOpenDatepicker(date, minimumDays) {
      let newDate = date.add('days', minimumDays);

      this.set('startDate', date);
      this.set('endDate', newDate);
    }
  }
});
