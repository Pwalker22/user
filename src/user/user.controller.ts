/* eslint-disable prettier/prettier */
// src/users/user.controller.ts
// Importar los decoradores y clases necesarios de NestJS
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service'; // Importar el servicio User
import { User } from './user.entity'; // Importar la entidad User

// Definir un controlador llamado 'UserController' utilizando el decorador 'Controller'
@Controller('users')
export class UserController {
  // Constructor del controlador que recibe una instancia del servicio 'UserService'
  constructor(private readonly userService: UserService) {}

  // Ruta HTTP POST para crear un nuevo usuario
  @Post()
  createUser(@Body() user: User): string {
    // Llamar al método 'createUser' del servicio para crear un usuario y devolver el mensaje de éxito
    return this.userService.createUser(user);
  }

  // Ruta HTTP GET para obtener todos los usuarios
  @Get()
  getAllUsers(): User[] {
    // Llamar al método 'getAllUsers' del servicio para obtener la lista de usuarios
    return this.userService.getAllUsers();
  }

  // Ruta HTTP GET para obtener un usuario por su ID
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    // Llamar al método 'getUserById' del servicio para obtener un usuario por su ID
    return this.userService.getUserById(parseInt(id, 10));
  }

  // Ruta HTTP PUT para actualizar un usuario por su ID
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: Partial<User>): string {
    // Llamar al método 'updateUser' del servicio para actualizar un usuario y devolver el mensaje de éxito
    return this.userService.updateUser(parseInt(id, 10), updateUserDto);
  }

  // Ruta HTTP DELETE para eliminar un usuario por su ID
  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    // Llamar al método 'deleteUser' del servicio para eliminar un usuario y devolver el mensaje de éxito
    return this.userService.deleteUser(parseInt(id, 10));
  }
}

