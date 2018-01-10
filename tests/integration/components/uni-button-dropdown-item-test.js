import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { click } from 'ember-native-dom-helpers';

moduleForComponent('uni-button-dropdown-item', 'Integration | Component | uni button dropdown item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  let expectedValue = 'Portugal';
  let expectedDescription = 'Nice country';
  this.set('option', { key: 'pt', value: expectedValue, description: expectedDescription });
  this.set('onClick', (key) => {
    return key;
  });

  this.render(hbs`{{uni-button-dropdown-item onClick=onClick option=option}}`);

  assert.equal(this.$('.uni-button-dropdown__list__item--value').text().trim(), expectedValue);
  assert.equal(this.$('.uni-button-dropdown__list__item--description').text().trim(), expectedDescription);
});

test('it executes action when clicked', async function(assert) {
  assert.expect(1);

  let expectedKey = 'pt';

  this.set('clickAction', (key) => {
    assert.equal(key, expectedKey);
  });

  this.set('option', { key: expectedKey, value: 'Portugal', description: 'Nice country' });

  this.render(hbs`{{uni-button-dropdown-item option=option onClick=clickAction}}`);

  await click('.uni-button-dropdown__list__item');
});
