// src/users/users.module.ts
// Importar el decorador 'Module' de NestJS
import { Module } from '@nestjs/common';

// Importar el controlador 'UserController' y el servicio 'UserService'
import { UserController } from './user.controller';
import { UserService } from './user.service';

// Definir un módulo llamado 'UsersModule' utilizando el decorador 'Module'
@Module({
  // Especificar los controladores que pertenecen a este módulo
  controllers: [UserController],

  // Especificar los servicios que pertenecen a este módulo
  providers: [UserService],
})
// Exportar el módulo 'UsersModule' para que pueda ser utilizado en otros lugares de la aplicación
export class UsersModule {}
