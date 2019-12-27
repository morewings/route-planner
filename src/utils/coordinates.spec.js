import {serializeCoordinates, parseCoordinates} from './coordinates';

describe('serializeCoordinates', () => {
  it('serializes coordinates', () => {
    const coordinates = Object.freeze({
      lat: () => 'lat',
      lng: () => 'lng',
    });
    expect(serializeCoordinates(coordinates)).toEqual(
      expect.objectContaining({
        lat: 'lat',
        lng: 'lng',
      })
    );
  });
});

describe('parseCoordinates', () => {
  it('parses coordinates', () => {
    const coordinates = Object.freeze([
      Object.freeze({
        lat: 'lat',
        lng: 'lng',
      }),
    ]);
    parseCoordinates(coordinates).forEach((coordinate, i) => {
      expect(coordinate.lat()).toBe(coordinates[i].lat);
      expect(coordinate.lng()).toBe(coordinates[i].lng);
    });
  });
});
