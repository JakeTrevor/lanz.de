import * as fs from "fs";

// todo:
// !needs to check if an album is empty
// Laurin, all you have to do is edit this function
export async function getAlbumList(): Promise<string[]> {
  let albums = fs.readdirSync(import.meta.env.PUBLIC_ALBUMS);

  console.log("album pages generated:");
  console.log(albums);
  return albums;
}

export function getAlbumLinks(): albumLink[] {
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
