import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyUsersService } from './usuarios/spotifyUsers.service';
import { SpotifyUsersController} from './usuarios/spotifyUsers.controller';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [],
  controllers: [AppController, SpotifyUsersController, SongsController],
  providers: [AppService, SpotifyUsersService, SongsService],
})
export class AppModule {}


