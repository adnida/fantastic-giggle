describe("Player", () => {
  const Player = require('../../lib/jasmine_examples/Player');
  const Song = require('../../lib/jasmine_examples/Song');
  let player;
  let song;

  beforeEach(() => {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", () => {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", () => {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", () => {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", () => {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });
});
