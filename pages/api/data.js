const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
];

const videos = ["", ""];

const featureSlides = [
  {
    id: 1,
    title: "Complete contrl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iste consectetur repudiandae ad delectus at nostrum illo voluptates distinctio nemo, explicabo commodi impedit non quia unde nam pariatur in facilis.",
    imageUrl: "/images/imghome.jpg",
  },
  {
    id: 2,
    title: "On Brand",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iste consectetur repudiandae ad delectus at nostrum illo voluptates distinctio nemo, explicabo commodi impedit non quia unde nam pariatur in facilis.",
    imageUrl: "/images/imgabout.jpg",
  },
  {
    id: 3,
    title: "Immersive",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iste consectetur repudiandae ad delectus at nostrum illo voluptates distinctio nemo, explicabo commodi impedit non quia unde nam pariatur in facilis.",
    imageUrl: "/images/imgcontact.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json({ featureSlides, photos, videos });
}
