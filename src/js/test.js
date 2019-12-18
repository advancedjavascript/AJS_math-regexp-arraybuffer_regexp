import Validator from './app';

test('test uncorrect name', () => {
  const name = '_user';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('test uncorrect name', () => {
  const name = '9user';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('test uncorrect name', () => {
  const name = 'пользователь';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});

test('test uncorrect name', () => {
  const name = 'user00000';
  const result = Validator.validateUsername(name);
  expect(result).toBe(false);
});


test('test correct name', () => {
  const name = 'kate-gaw';
  const result = Validator.validateUsername(name);
  expect(result).toBe(true);
});

test('test correct name', () => {
  const name = 'user98_pl12';
  const result = Validator.validateUsername(name);
  expect(result).toBe(true);
});
