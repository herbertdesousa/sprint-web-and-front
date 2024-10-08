import { LocalStorageDatasource } from "../data/LocalStorageDatasource";
import { InfluencersController } from "./InfluencersController";
import { NewsController } from "./NewsController";
import { StandingController } from "./StandingController";

const localStorageDatasource = new LocalStorageDatasource();

export const controllers = {
  standing: new StandingController(localStorageDatasource),
  influencer: new InfluencersController(localStorageDatasource),
  news: new NewsController(localStorageDatasource),
};
