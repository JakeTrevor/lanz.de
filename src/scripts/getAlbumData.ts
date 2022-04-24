import * as fs from "fs";
import { query } from "./getters";

// ! this should work, but i can't test without database population
export async function getAlbumImages(
  album: string
): Promise<photoDisplayData[]> {
  let q = `
  SELECT *
  FROM pictures
  WHERE pictures.type = "photoData" AND pictures.album="${album}"
  `;

  let result = await query(q);
  // @ts-ignore
  // return result

  // old placeholder code:
  let albumPath = import.meta.env.PUBLIC_ALBUMS + "/" + album;
  let images = fs.readdirSync(albumPath);
  let caption = "this is the caption";

  albumPath = albumPath.slice(8);
  return images.map((picture) => {
    return { href: albumPath + "/" + picture, caption: caption };
  });
}

// * done
export async function getAlbumMetadata(
  album: string
): Promise<albumDisplayData> {
  let q = `
  SELECT * 
  FROM pictures 
  WHERE pictures.type = "albumData" AND pictures.name="${album}"
  `;

  let result = await query(q);
  // @ts-ignore
  return result[0];
}
