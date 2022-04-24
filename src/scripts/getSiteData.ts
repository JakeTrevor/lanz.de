import * as fs from "fs";
import { query } from "./getters";

// todo:
// !needs to check if an album is empty
// Laurin, all you have to do is edit this function
export async function getAlbumNameList(): Promise<string[]> {
  let q = `
  SELECT *
  FROM pictures
  WHERE pictures.type = "albumData"
  `;

  let result = await query(q);
  result = result.map((each) => each.name);
  // @ts-ignore
  // return result

  // old code:
  let albums = fs.readdirSync(import.meta.env.PUBLIC_ALBUMS);

  console.log("album pages generated:");
  console.log(albums);
  return albums;
}

export async function getAlbumLinks(): Promise<albumLink[]> {
  let q = `
  SELECT *
  FROM pictures 
  WHERE pictures.type = "albumData"
  `;

  let qResult: albumData[] = await query(q);

  let result = qResult.map((each) => {
    return {
      img: each.thumbnail,
      desination: "/projekte/" + each.name,
      tooltip: each.min_description,
    };
  });

  // return result

  // old code
  let location = import.meta.env.PUBLIC_ALBUMS;
  let albums = fs.readdirSync(location);

  return albums.map((album) => {
    let albumPath = location + "/" + album;

    let img = fs.readdirSync(albumPath)[0];
    albumPath = albumPath.slice(8);
    img = albumPath + "/" + img;

    let destination = "/projekte/" + album;
    let tooltip = "please define the format for this";

    return { img, destination, tooltip };
  });
}
