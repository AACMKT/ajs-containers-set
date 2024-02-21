import { chars } from '../models';
import Team from '../models/Team';

test('class Team add() method (with correct data input) test', () => {
  const team = new Team();
  chars.forEach((element) => {
    team.add(element);
  });
  const set = new Set([...chars]);
  expect(team.members).toEqual(set);
});

test('class Team add() method (with incorrect data input) test', () => {
  const team = new Team();
  chars.forEach((element) => {
    team.add(element);
  });

  const throwError = () => {
    const repeat = chars[0];
    const error = team.add(repeat);
    return error;
  };
  expect(throwError).toThrowError('Character is already in the team');
});

test('class Team addAll() method test', () => {
  const team = new Team();
  team.addAll(...chars, ...chars);
  const set = new Set([...chars]);
  expect(team.members).toEqual(set);
});

test('class Team toArray() method test', () => {
  const team = new Team();
  team.addAll(...chars);
  expect(team.toArray()).toEqual(chars);
});
