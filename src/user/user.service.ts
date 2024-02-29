/* eslint-disable prettier/prettier */
// src/users/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  // Método para crear un usuario
  createUser(user: User): string {
    // Asignar un ID único al usuario
    user.id = this.users.length + 1;

    // Agregar el usuario a la lista de usuarios
    this.users.push(user);

    // Devolver un mensaje de éxito indicando que el usuario fue creado exitosamente
    return `User with ID ${user.id} created successfully`;
  }

  // Método para obtener todos los usuarios
  getAllUsers(): User[] {
    // Devolver la lista completa de usuarios
    return this.users;
  }

  // Método para obtener un usuario por ID
  getUserById(id: number): User {
    // Buscar el usuario en la lista por su ID
    const user = this.users.find(u => u.id === id);

    // Si el usuario no se encuentra, lanzar una excepción NotFoundException
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Devolver el usuario encontrado
    return user;
  }

  // Método para actualizar un usuario por ID
  updateUser(id: number, updateUserDto: Partial<User>): string {
    // Obtener el usuario por ID
    const user = this.getUserById(id);

    // Actualizar las propiedades del usuario con los valores proporcionados en updateUserDto
    Object.assign(user, updateUserDto);

    // Devolver un mensaje de éxito indicando que el usuario fue actualizado exitosamente
    return `User with ID ${id} updated successfully`;
  }

  // Método para eliminar un usuario por ID
  deleteUser(id: number): string {
    // Buscar el índice del usuario en la lista por su ID
    const index = this.users.findIndex(u => u.id === id);

    // Si el usuario se encuentra, eliminarlo de la lista
    if (index !== -1) {
      this.users.splice(index, 1);

      // Devolver un mensaje de éxito indicando que el usuario fue eliminado exitosamente
      return `User with ID ${id} deleted successfully`;
    } else {
      // Si el usuario no se encuentra, lanzar una excepción NotFoundException
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
