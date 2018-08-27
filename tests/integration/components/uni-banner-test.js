import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uni-banner', 'Integration | Component | uni banner', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#uni-banner}}
      Example
    {{/uni-banner}}`);

  assert.equal(this.$().text().trim(), 'Example');
});