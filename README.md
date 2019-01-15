# ESTUDO NEST API

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation Nest

```bash
$ npm i -g @nestjs/cli
```

### Create project

```bash
$ nest new project-name
$ cd project-name 
```

## Installation project

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Create Gitignore

[gitignore.io](https://www.gitignore.io/)

[link_create](https://www.gitignore.io/api/node,windows,visualstudiocode)

## Installation DotEnv

[DotEnv](https://github.com/motdotla/dotenv)

```bash
$ npm i dotenv --save
```

### Change ts and create .env files

#### main.ts

```js
import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server Running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
```

#### .env

```bash
PORT=4000
```

## Installation database connection

```bash
$ npm i pg typeorm @nestjs/typeorm --save
```

### Create to config orm entity

#### ormconfig.json

```js
{
    "type": "postgres",
    "host": "localhost",
    "port": "5432",
    "username": "postgres",
    "database": "estudo_nest_api_db",
    "synchronize": "true",
    "logging": "true",
    "entities": ["./src/**/*.entity.ts", "./dist/**/*.entity.js"]
}
```

### Change app module for use typeorm

#### app.module.ts

```js
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { from } from 'rxjs';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### Run generate table schema

```bash
$ npm run start:dev
> estudo-nest-api@0.0.1 start:dev ...\estudo-nest-api
> nodemon
[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: ...\estudo-nest-api\src/**/*
[nodemon] starting `ts-node -r tsconfig-paths/register src/main.ts`
[Nest] 1684   - 2019-1-14 00:43:11   [NestFactory] Starting Nest application...[Nest] 1684   - 2019-1-14 00:43:11   [InstanceLoader] TypeOrmModule dependencies initialized +143ms
[Nest] 1684   - 2019-1-14 00:43:11   [InstanceLoader] AppModule dependencies initialized +3ms
[Nest] 1684   - 2019-1-14 00:43:11   [InstanceLoader] TypeOrmCoreModule dependencies initialized +305ms
[Nest] 1684   - 2019-1-14 00:43:12   [RoutesResolver] AppController {/}: +241ms
[Nest] 1684   - 2019-1-14 00:43:12   [RouterExplorer] Mapped {/, GET} route +14ms
[Nest] 1684   - 2019-1-14 00:43:12   [NestApplication] Nest application successfully started +4ms
[Nest] 1684   - 2019-1-14 00:43:12   [Bootstrap] Server Running on http://localhost:4000 +13ms
```

## License

  Nest is [MIT licensed](LICENSE).
