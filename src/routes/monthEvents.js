// @flow
import { Router as router } from "express";
import { wrap } from "async-middleware";
import { validateParameters } from "../middlewares";
import errorHandler from "../utils/errorHandler";
import { promisify } from "util";
import request from "request";
import loadEnv from "../utils/loadEnv";
import {
  getMonthEvents,
  type MonthEventResponseType
} from "../utils/bodySelectors";

const route = router();
const promisifyRequest = promisify(request);

type GetEventRequestType = {
  query: {
    month: string,
    year: string
  } & express$Request
};

const dictValuesCount = (dict: { [string]: mixed }) => {
  let count = 0;
  for (const key in dict) count++;
  return count;
};

route.get(
  "/",
  validateParameters("query", ["year", "month"]),
  wrap((req: GetEventRequestType, res: express$Response) => {
    const { month, year } = req.query;

    const postData = {
      Year: year,
      Month: month,
      Base1: 0,
      Base2: 1,
      Base3: 2,
      Responsive: true
    };

    const url = `${loadEnv("TIME_IR_MAIN_URL")}/`;

    return promisifyRequest({
      method: "POST",
      url: url,
      headers: {
        Referer: url,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: postData,
      followAllRedirects: true
    })
      .then((response: { statusCode: number, body: string }) => {
        getMonthEvents(response.body, month, year).then(
          (events: Array<MonthEventResponseType>) => {
            const statusCode = dictValuesCount(events) === 0 ? 204 : 200; // eslint-disable-line no-magic-numbers
            res.status(statusCode).json(events || {});
          }
        );
      })
      .catch(() => errorHandler(res));
  })
);

export default route;
