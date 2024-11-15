import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SpotifyUsersModel } from './spotifyUsers.Model';
import { SpotifyUsersService } from './spotifyUsers.service';

@Controller('spotifyUsers')
export class SpotifyUsersController {
  constructor(private readonly service: SpotifyUsersService) {}

  @Get()
  getSpotifyUsers() {
    return this.service.getSpotifyUsers();
  }

  @Get('id/:id')
  getSpotifyUsersById(@Param('id') id: string) {
    return this.service.getSpotifyUserByID(id);
  }

  @Post()
  postSpotifyUsers(@Body() newUser: SpotifyUsersModel) {
    return this.service.postSpotifyUser(newUser);
  };

 
  @Put('id/:id')
  putSpotifyUser(@Body() newSpotifyUser: SpotifyUsersModel, @Param('id') id: string) {
    return this.service.putSpotifyUser(id, newSpotifyUser);
  }

  @Delete()
  deleteAllUsers() {
    return this.service.deleteAllUsers();
  }

  @Delete('id/:id')
  deleteUserById(@Param('id') id: string) {
    return this.service.deleteUserByID(id);
  };
}




