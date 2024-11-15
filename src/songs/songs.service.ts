import { Body, Injectable, Param, Put } from '@nestjs/common';
import { SongsModel } from './songs.model';

@Injectable()
export class SongsService {
    songs = []; // Array para almacenar canciones

  constructor() {
    let song = {
      "id": "1",
      "name": "Givenchy",
      "artist": "DUKI"
    };
    this.songs.push(song);
    
    song = {
      "id": "2",
      "name": "Cupido",
      "artist": "TINI"
    };
    this.songs.push(song);
    
    song = {
      "id": "3",
      "name": "Little things",
      "artist": "1D"
    };
    this.songs.push(song);
  }

  getAllSongs() {
    return this.songs;
  }

  getSongByName(name: string) {
    for (let i = 0; i < this.songs.length; i++) {
      const songByName = this.songs[i];
      if (songByName.name === name) {
        return songByName;
      }
    }
  }

  getSongByArtist(artist: string) {
    for (let i = 0; i < this.songs.length; i++) {
      const songByArtist = this.songs[i];
      if (songByArtist.artist === artist) {
        return songByArtist;
      }
    }
  }

  postSongs(song: SongsModel) {
    let newSong = {
      "id": song.id,
      "name": song.name,
      "artist": song.artist
    };
    this.songs.push(newSong);
    return newSong;
  }

  putSongById(id: string, actualizarCancion: SongsModel) {
    const cancionIndex = this.songs.findIndex(song => song.id === id);

    if (cancionIndex !== -1) {
        this.songs[cancionIndex] = {
            ...this.songs[cancionIndex],
            ...actualizarCancion
        };
        return this.songs[cancionIndex];
    }

    return null; // Retorna null si no se encontró la canción
}


  deleteSongById(id: number){
    for (let j = 0; j < this.songs.length; j++) {
        const songById = this.songs[j];
        if (songById.id === id) {
          return { message: 'La canción ha sido eliminada'}
          this.songs.splice(songById, 1);

        }
        
    }
  }

  deleteAllSongs() {
    this.songs = []; 
    return { message: 'All songs have been deleted successfully.' };
  }
}