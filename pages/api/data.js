const photos = [
  "/images/imghome.jpg",
  "/images/imgabout.jpg",

  "/images/imgcontact.jpg",
  "/images/imgcontact.jpg",
];

const videos = [
  "https://kstatic.googleusercontent.com/files/dfb9f5574f912670aca64ab32d690302f592ddbb81f4333821403b5501321a9acf26f4b050139637fa2890bbdf88e79259e0ae9472e1394d4be47b54667f6e21",
  "https://kstatic.googleusercontent.com/files/a22c40a5fbc5b4f9eb6fa77e232b4106546d67302244e5c03af4ffcd49a86473f1615f0ffdc8204e62576008050be336dfe0cbb70e754c70f06b4c7ecd4dd3ca",
];

const featureSlides = [
  {
    id: 1,
    title: "Complete contrl",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iste consectetur repudiandae ad delectus at nostrum illo voluptates distinctio nemo, explicabo commodi impedit non quia unde nam pariatur in facilis.",
    imageUrl: "",
  },
  {
    id: 2,
    title: "On Brand",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iste consectetur repudiandae ad delectus at nostrum illo voluptates distinctio nemo, explicabo commodi impedit non quia unde nam pariatur in facilis.",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Immersive",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iste consectetur repudiandae ad delectus at nostrum illo voluptates distinctio nemo, explicabo commodi impedit non quia unde nam pariatur in facilis.",
    imageUrl: "",
  },
];

export default function handler(req, res) {
  res.status(200).json({ featureSlides, photos, videos });
}
