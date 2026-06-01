import type nl from "../messages/nl.json";

type Messages = typeof nl;

declare global {
  interface IntlMessages extends Messages {}
}
