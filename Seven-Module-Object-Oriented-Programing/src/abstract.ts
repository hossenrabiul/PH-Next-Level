// interface MediaPlayer {
//     play() : void;
//     pause() : void;
//     stop() : void
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("Media is playing ......")
//     }
//     pause() {
//         console.log("Media is paused")
//     }
//     stop(): void {
//         console.log("Media is stopped")
//     }

// }

// const medua = new MusicPlayer()
// console.log(medua.play())

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
  play() {
    console.log("Music is playing .... ");
  }
  pause() {
    console.log("Music is paused ...");
  }
  stop(): void {
    console.log("Medis is stopped");
  }
}


const media = new MusicPlayer()
media.pause()