import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, Bienvenido Andres!';
  }

  postHello(): string {
    return 'Creando Saludo.';
  }
}
