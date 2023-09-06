import express from 'express';
import chalk from 'chalk';
import { RouterInstance, DatabaseMapper, Router } from 'types/app';

interface AppConfig {
  port: string;
  databaseMapper?: DatabaseMapper;
  middleware: any[];
  routers: Router[];
}

export default function appFactory({
  port = '8000',
  databaseMapper,
  middleware,
  routers,
}: AppConfig) {
  const app = express();

  const loadMiddleware = () => {
    if (Array.isArray(middleware) && middleware.length > 0) {
      const middlewarePlusDefaults = [
        express.json(),
        express.urlencoded({ extended: false }),
        ...middleware,
      ];
      for (let mdlware of middlewarePlusDefaults) {
        app.use(mdlware);
      }
    }
  };

  const loadRouters = () => {
    if (Array.isArray(routers) && routers.length > 0) {
      for (let router of routers) {
        const routerConfig = router(
          express.Router() as RouterInstance,
          databaseMapper
            ? (databaseMapper as DatabaseMapper)
            : (databaseMapper as undefined)
        );
        app.use(routerConfig.base, routerConfig.routers);
      }
    }
  };

  return {
    init: () => {
      loadMiddleware();
      loadRouters();
      app.listen(port, () => {
        console.log(`${chalk.cyanBright('SERVER LISTENING ON PORT:')} ${chalk.whiteBright(
          port
        )}
    `);
      });
    },
  };
}
