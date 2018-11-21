import test from 'ava';
import jumper from '.';

test('normal', (t) => {
	const result = jumper('friday deploy, good luck!');

	t.true(result.length > 0);
	t.true(result.includes('friday'));
	t.true(result.includes('deploy'));
	t.true(result.includes('good luck!'));
	t.true(result.split('\n').length === 9);
});

test('compact', (t) => {
	const result = jumper('friday deploy, good luck!', {
		compact: true
	});

	t.true(result.length > 0);
	t.true(result.includes('friday'));
	t.true(result.includes('deploy'));
	t.true(result.includes('good luck!'));
	t.true(result.split('\n').length === 7);
});

test('extra floors', (t) => {
	const result = jumper('friday deploy, good luck!', {
		extraFloors: 1
	});

	t.true(result.split('\n').length === 11);
});
