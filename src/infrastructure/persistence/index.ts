import Logger from "../Logger";
import { mongoClient } from "./mongo/MongoClientFactory";

export default async function initializeDataBases(logger: Logger): Promise<void> {
  try {
    await Promise.all([mongoClient.init()]);
    logger.info("Database initialized correctly");
  } catch (err) {
    console.log(err);
    throw new Error("Database could not be initialized correctly");
  }
}
