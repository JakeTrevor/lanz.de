interface albumLink {
  img: string; //url for image to be displayed.
  destination: string; //href for the actual link.
  tooltip: string;
}

interface albumDisplayData {
  description: string;
  location: string;
  date: string;
}

interface photoDisplayData {
  href: string;
  caption: string;
}

//* data schema for cosmos DB

// for data about albums themselves
interface albumData {
  name: string;
  description: string;
  min_description: string;
  location: string;
  date: string;
  thumbnail: string; // a reference to a photo in the album witch should be displayed as the link
  type: "albumData";
}

// data about photos in an album
interface photoData {
  href: string;
  caption: string;
  album: string;
  type: "photoData";
}

// data concerning slots on the index page
interface slotPhoto {
  href: string;
  slot_id: string;
  type: "slotPhoto";
}

// alternate schema:
interface slotData {
  photos: string[];
  slot_id: string;
  type: "slotData";
}
