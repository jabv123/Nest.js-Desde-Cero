import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  updateHello(): string {
    return 'Actualizando saludo.';
  }

  getHello(): string {
    return 'Hello, Bienvenido Andres!';
  }

  postHello(): string {
    return 'Creando saludo.';
  }
}
