import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsModel } from './songs.model';


@Controller('songs')
export class SongsController {
    constructor (private readonly service: SongsService) {}

@Get() 
getAllSongs() {
    return this.service.getAllSongs();
} 

@Get('artist/:artist') 
getSongByArtist(@Param('artist')artist: string) {
    return this.service.getSongByArtist(artist);
}

@Get('name/:name')
getSongByName(@Param('name')name: string) {
   return this.service.getSongByName(name);
}

@Post()
addSong(@Body() song: SongsModel) {
  return this.service.postSongs(song);
}

@Put(':id')  
putSongById(@Param('id') id: string, @Body() actualizarCancion: SongsModel) {
  return this.service.putSongById(id, actualizarCancion);
}

@Delete('id/:id')
deleteSongById(@Param('id')id: number) {
  return this.service.deleteSongById(id);
}

@Delete()
deleteAllSongs() {
  return this.service.deleteAllSongs();
}
}