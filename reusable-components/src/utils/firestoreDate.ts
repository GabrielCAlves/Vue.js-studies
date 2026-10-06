import type { Timestamp } from "firebase/firestore";

const EMPTY_PLACEHOLDER = "—";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "short",
  timeStyle: "short",
});

/** Formats a Firestore timestamp for display; server timestamps resolve to null while pending. */
export function formatFirestoreDate(value: Timestamp | null): string {
  if (!value) {
    return EMPTY_PLACEHOLDER;
  }
  return dateFormatter.format(value.toDate());
}
