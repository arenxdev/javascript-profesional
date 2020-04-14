class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  tooglePlay() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  toogleMute() {
    this.media.muted = !this.media.muted;
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
}

export default MediaPlayer;
