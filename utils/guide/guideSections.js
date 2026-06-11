export default function guideSections() {
  const endpointSections = [
    {
      title: "✴︎ Get all published projects",
      description: "Retrieve a list of published projects",
      notes: [{ description: "[ username ] - username of your Mako account" }],
      items: [
        {
          title: "URL Request",
          code: "https://portfolio-cms-blond-five.vercel.app/api/users/[username]/projects/published",
        },
        {
          title: "200 Response",
          code: `[
     {
        "updatedAt": "May 24, 5:45pm",
        "id": 3,
        "title": "TCG Collector",
        "description": "This is a TCG collection app",
        "siteUrl": "https://github.com/example",
        "githubUrl": "https://github.com/example",
        "status": "Published",
        "tags": [
            "React",
            "Tailwind CSS",
            "JavaScript"
        ]
    },
    {
        "updatedAt": "April 28, 2:05pm",
        "id": 1,
        "title": "e-commerce App",
        "description": "This is an e-commerce site",
        "siteUrl": "https://github.com/example",
        "githubUrl": "https://github.com/example",
        "status": "Published",
        "tags": [
            "Next.js",
            "SCSS",
            "MongoDB"
        ]
    }
]`,
        },
      ],
    },

    {
      title: "✴︎ Get a single published project",
      description: "Retrieve the details of a single published project by ID",
      notes: [
        { description: "[ username ] - username of your Mako account" },
        { description: "[ id ] - project ID" },
      ],
      items: [
        {
          title: "URL Request",
          code: "https://portfolio-cms-blond-five.vercel.app/api/users/[username]/projects/[id]",
        },
        {
          title: "200 Response",
          code: `{
        "updatedAt": "April 28, 2:05pm",
        "id": 1,
        "title": "e-commerce App",
        "description": "This is an e-commerce site",
        "siteUrl": "https://github.com/example",
        "githubUrl": "https://github.com/example",
        "status": "Published",
        "tags": [
            "Next.js",
            "SCSS",
            "MongoDB"
    }`,
        },
      ],
    },
  ];

  return { endpointSections };
}
