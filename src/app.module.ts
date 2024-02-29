// app.module.ts
// Importar el decorador 'Module' de NestJS
import { Module } from '@nestjs/common';

// Importar el controlador 'AppController' y el servicio 'AppService'
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importar el módulo 'UsersModule'
import { UsersModule } from './user/user.module';

// Definir un módulo llamado 'AppModule' utilizando el decorador 'Module'
@Module({
  // Importar el módulo 'UsersModule', que agrupa los controladores y servicios relacionados con los usuarios
  imports: [UsersModule],

  // Especificar los controladores que pertenecen a este módulo
  controllers: [AppController],

  // Especificar los servicios que pertenecen a este módulo
  providers: [AppService],
})
// Exportar el módulo 'AppModule' para que pueda ser utilizado al ejecutar la aplicación
export class AppModule {}
