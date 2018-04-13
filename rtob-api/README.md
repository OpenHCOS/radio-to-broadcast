
## Installation

```bash
$ npm install
$ npm i -g npm-run-all
$ npm i -g wait-on
$ npm i -g shx
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
cp ormconfig.dist.json ormconfig.json
npm run start:prod
```

## Test

```bash
# e2e tests
$ npm run test:all
```

## docker build and run

```
$ docker build -t rtob-api .
$ docker run rtob-api
```