import * as fs from "fs";

export function getAlbumImages(album: string) {
  let albumPath = import.meta.env.PUBLIC_ALBUMS + "/" + album;
  let images = fs.readdirSync(albumPath);

  albumPath = albumPath.slice(8);
  return images.map((picture) => albumPath + "/" + picture);
}

export function getAlbumMetadata(album: string): albumMetadata {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return {
    name: "not defined",
    description: description,
    location: "here",
    date: "yesterday",
  };
}
