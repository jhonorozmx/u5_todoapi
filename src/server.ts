import compress from "compression";
import morgan from "morgan";
import errorHandler from "errorhandler";
import express, { Request, Response } from "express";
import Router from "express-promise-router";
import helmet from "helmet";
import * as http from "http";
import { registerRoutes } from "./routes";
import Logger from "./infrastructure/Logger";

export default class Server {
  private express: express.Express;
  private httpServer?: http.Server;
  private logger: Logger;
  private port: string;

  // Server class constructor
  constructor(port: string, logger: Logger) {
    this.port = port;
    this.express = express();
    this.logger = logger;

    // Security middleware helmet
    this.express.use(helmet());

    // Native body parser
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));

    // Compression middleware
    this.express.use(compress());

    // Set views engine and templates directory
    this.express.set("views", "src/views");
    this.express.set("view engine", "pug");

    // Logger middleware for requests "Morgan"
    this.express.use(
      morgan("combined", {
        stream: {
          write: (message: string) => this.logger.info(message.trim()),
        },
      })
    );

    // Router middleware that removes the need to handle rejections
    const router = Router();
    router.use(errorHandler());
    this.express.use(router);
    registerRoutes(router);

    // Error handler middleware, to catch errors from Promise.reject() inside a controller
    router.use((err: Error, req: Request, res: Response, next: Function) => {
      this.logger.error(err);
      res.status(500).send(err.message);
    });
  }

  // START EXPRESS SERVER
  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(`Backend App is running in ${this.express.get("env")} mode`);

        this.logger.info("Press CTRL-C to stop\n");
        resolve();
      });
    });
  }

  // Returns the express http server instance
  getHTTPServer(): http.Server | undefined {
    return this.httpServer;
  }

  // Close the http server connection
  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}
