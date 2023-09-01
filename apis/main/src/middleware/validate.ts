import { validateBody, validateEmail } from '@/lib/input-validators';
import { RequestHandler, MiddlewareCollection } from 'types/app';

interface ValidationHandlers {
  fields(expectedFields: string[]): RequestHandler;
  email: RequestHandler;
}

const validationMiddleware: MiddlewareCollection<ValidationHandlers> = () => {
  return {
    fields(expectedFields) {
      return (req, res, next) => {
        if (
          !validateBody({
            body: req.body,
            expectedPropertys: expectedFields,
          })
        ) {
          res.status(406).json({
            result: false,
            error: 'Invalid fields',
          });
          return;
        }
        next();
      };
    },
    email(req, res, next) {
      if (!validateEmail(req.body?.email).matches) {
        res.status(406).json({
          result: false,
          error: 'Invalid email',
        });
        return;
      }
      next();
    },
  };
};

export default validationMiddleware;
