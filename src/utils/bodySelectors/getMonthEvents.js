// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";
import updateEventString from "../updateEventString";

export type MonthEventResponseType = {
  date: string,
  event: string,
  isHoliday: boolean
};

const getDayEvents = (
  body: string,
  month: string | number,
  year: string | number
): Promise<Array<MonthEventResponseType>> => {
  let getEventsFromHtml = {};
  const events = {};
  const dom = new JSDOM(body);
  const getElementWithClass = dom.window.document.querySelector(
    ".eventsCurrentMonthTitle"
  );

  if (getElementWithClass)
    getEventsFromHtml = getElementWithClass.nextElementSibling.children;

  Object.keys(getEventsFromHtml).map((eventKey: string) => {
    const event = getEventsFromHtml[eventKey].textContent.trim();
    const day = toEnglishDigits(event.match(/^[۰-۹]+/g).shift());
    const isHoliday = getEventsFromHtml[eventKey].classList.contains(
      "eventHoliday"
    );
    const eventString = toEnglishDigits(updateEventString(event));
    const date = `${year}-${month.length === 1 ? `0${month}` : month}-${
      day.length === 1 ? `0${day}` : day
    }`;
    if (!events[day]) {
      events[day] = {
        isHoliday: false,
        events: []
      };
    }
    if (isHoliday) events[day].isHoliday = true;

    return events[day].events.push({
      date: date,
      event: eventString,
      isHoliday: isHoliday
    });
  });

  return Promise.resolve(events);
};

export default getDayEvents;
