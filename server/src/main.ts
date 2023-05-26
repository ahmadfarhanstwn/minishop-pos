import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const PORT = process.env.NESTJS_APP_DOCKER_PORT;

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(PORT).then((value) => {
    console.log(`Server started at http://localhost:${PORT}`);
  });

  // This is necessary to make the hot-reload work with Docker
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
