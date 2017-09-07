# Buggy Project - API

Buggy is a full-featured modern bug tracker. This project is related to the API written in NodeJS 8.x+

## Prerequisities

* [NodeJS 8.4+](https://nodejs.org/en/)
* NPM 5.3.0+
* A MySQL or PostgreSQL database engine

## Installation

### Create the database

You will have to create a new database on your engine. You can name it whatever you want, you will just have to type the new database name in the configuration.
It's hardly recommended to create a dedicated role (user) for this database.

Though, it's a bad idea to have only a root without password on your database server.

**FOR MYSQL**

```sql
CREATE DATABASE buggy;
CREATE USER buggy IDENTIFIED BY 'thispasswordissostrong';
GRANT ALL PRIVILEGES ON buggy.* TO buggy;
FLUSH PRIVILEGES;
```

**FOR POSTGRESQL**

```sql
CREATE DATABASE buggy;
CREATE ROLE buggy WITH LOGIN PASSWORD 'thispasswordissostrong';
GRANT ALL PRIVILEGES ON buggy.* TO buggy;
```

### Clone this repository

```
$ git clone https://github.com/ChakSoft/buggy-api.git
```

### Install dependencies

You can use `npm` or `yarn` (1.0+) if you prefer.

```bash
$ cd buggy-api
$ npm install # or yarn if you prefer
```

### First run

To install database and first run the service, you will have to start the API server setup routine.

```bash
$ npm start setup # or yarn setup if you prefer
..:: Buggy API Setup ::..

1. Database configuration
Engine [mysql] >
Host [127.0.0.1] >
Port [3306] >
User [buggy] >
Password >
Name [buggy] >

Creating database...
Populating database...
Database information registered.

2. API Configuration
Port to use [17811] >
HTTP Prefix [/api] >

API configuration registered.

3. Administrator
Administrator username [admin] >
Administrator password >

Adding administrator...
Administrator registered.

The Buggy API is ready. You can run `npm start` or `yarn start`.
Thank you !
```

### Start the API with PM2

You will have to install PM2 globally first. PM2 is a very useful and very efficient process manager.

```
$ sudo npm install -g pm2
$ npm start
```

You will see a table in your console with the newly created process for Buggy API.

### Congratulations

Buggy API is running and operational !
You can deploy the [Buggy Web UI](https://github.com/ChakSoft/buggy-web) to complete your installation or use your own software to manage your teams, projects, and issues.
