import "dotenv/config";
import "reflect-metadata";

import { DataSource, DataSourceOptions } from "typeorm";

import { User } from "./entities/entities/user";
import { Address } from "./entities/entities/address";
import { Announce } from "./entities/entities/announce";
import { Comment } from "./entities/entities/comment";
import { Color } from "./entities/entities/color";
import { Fuel } from "./entities/entities/fuel";
import { Gallery } from "./entities/entities/galery";
import { Mark } from "./entities/entities/mark";
import { Model } from "./entities/entities/model";
import { Year } from "./entities/entities/year";

const dataSourceConfig = (): DataSourceOptions => {
  return {
    type: "postgres",
    url: process.env.DB_URI,
    port: parseInt(process.env.PORT!),
    logging: false,
    entities: [
      User,
      Address,
      Announce,
      Comment,
      Color,
      Fuel,
      Gallery,
      Mark,
      Model,
      Year
    ],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
