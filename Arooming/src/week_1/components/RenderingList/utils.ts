interface person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}
export function getImageUrl(person: person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
