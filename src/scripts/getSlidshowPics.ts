// getter functions for the pictures in the slideshow on the front(index) page
// return a source url

import * as fs from "fs";
import { query } from "./getters";

export async function getSlot(id: any): Promise<string[]> {
  let q = ` 
  SELECT *
  FROM pictures
  WHERE pictures.type = "slotPhoto" AND pictures.slot_id= "${id}"
  `;

  let result = await query(q);
  let slides = result.map((each) => each.href);
  return slides;
}

// pictures at the very top
export function getSlot1(): string[] {
  //alt:
  // return getSlot(1)
  let location = String(import.meta.env.PUBLIC_FRONT_PAGE_SLIDES);

  let slides = fs.readdirSync(location);

  location = location.slice(8);
  slides = slides.map((each) => location + "/" + each);

  return slides;
}

export function getSlot2(): string[] {
  let location = String(import.meta.env.PUBLIC_MIDPAGE_PICTURES);
  let slides = fs.readdirSync(location);

  location = location.slice(8);
  slides = slides.map((each) => location + "/" + each);

  return slides;
}

export function getSlot3(): string[] {
  let location = String(import.meta.env.PUBLIC_LANZ_LIVE_SLIDES);

  let slides = fs.readdirSync(location);

  location = location.slice(8);
  slides = slides.map((each) => location + "/" + each);

  return slides;
}
