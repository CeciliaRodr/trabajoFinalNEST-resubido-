import { Injectable } from '@nestjs/common';
import { SpotifyUsersModel } from './spotifyUsers.Model';

@Injectable()
export class SpotifyUsersService {
    listaDeUsuarios = []; 

    constructor() {
        let spotifyUser = {
            "id": "1",
            "username": "Fran22"
        };
        this.listaDeUsuarios.push(spotifyUser);
        
        spotifyUser = {
            "id": "2",
            "username": "TizianoR"
        };
        this.listaDeUsuarios.push(spotifyUser);
    }

  getSpotifyUsers() {
    return this.listaDeUsuarios;
  }

  getSpotifyUserByID(id: string) {
    return this.listaDeUsuarios.find(user => user.id === id);
    /*for (let i = 0; i < this.listaDeUsuarios.length; i++) {
        const spotifyUser = this.listaDeUsuarios[i];
        if (spotifyUser.id === id) {
            return spotifyUser;
        }
    }*/
}

  postSpotifyUser(spotifyUser: SpotifyUsersModel) {
    let newUser = {
      "id": spotifyUser.id,
      "username": spotifyUser.username,
    };
    this.listaDeUsuarios.push(newUser);
    return newUser;
  }


    putSpotifyUser(id: string, actualizarUser: SpotifyUsersModel) {
        const userIndex = this.listaDeUsuarios.findIndex(user => user.id === id);

        this.listaDeUsuarios[userIndex] = {
            ...this.listaDeUsuarios[userIndex],
            ...actualizarUser
        };

        return this.listaDeUsuarios[userIndex]; 
    }

 

  deleteUserByID(id: string){
    const userIndex = this.listaDeUsuarios.findIndex(user => user.id === id);
         if (userIndex === -1) {
            return { message: `El usuario con ID ${id} no existe`};
         }
        
    this.listaDeUsuarios.splice(userIndex, 1);
    return { message: `El usuario con ID ${id} se elimino exitosamente`};

    }


  deleteAllUsers() {
    this.listaDeUsuarios = []; 
    return { message: 'Todos los usuarios se eliminaron exitosamente.' };
  }

}






