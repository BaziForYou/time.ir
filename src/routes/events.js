// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { validateParameters } from "../middlewares";
import errorHandler from "../utils/errorHandler";
import loadEnv from "../utils/loadEnv";
import { getDayEvents } from "../utils/bodySelectors";

const route = router();
const promisifyRequest = promisify(request);

const dictValuesCount = (dict: { [string]: mixed }) => {
  let count = 0;
  for (const key in dict) count++;
  return count;
};

type GetEventRequestType = express$Request & {
  query: {
    day: string,
    month: string,
    year: string
  }
};

route.get(
  "/",
  validateParameters("query", ["year", "month", "day", "type"]),
  wrap((req: GetEventRequestType, res: express$Response) => {
    const { day, month, year, type } = req.query;

    let dateType = 0;
    switch (type) {
      case "jalali":
        dateType = 0;
        break;
      case "gregorian":
        dateType = 1;
        break;
      case "hijri":
        dateType = 2;
        break;
      default:
        throw new BadRequest(
          "allowed values for type parameter: ['jalali', 'gregorian', 'hijri']"
        );
    }

    const url = `${loadEnv(
      "TIME_IR_MAIN_URL"
    )}/fa/event/list/${dateType}/${+year}/${+month}/${+day}`;

    return promisifyRequest(url)
      .then((response: { statusCode: number, body: string }) =>
        getDayEvents(response.body, dateType, day, month, year).then(
          (events: Array<string>) => {
            const statusCode = dictValuesCount(events) === 0 ? 204 : 200; // eslint-disable-line no-magic-numbers
            res.status(statusCode).json(events || {});
          }
        )
      )
      .catch(() => errorHandler(res));
  })
);

export default route;
