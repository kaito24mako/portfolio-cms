export default function getEndpointData() {
  const endpointSections = [
    {
      title: "✴︎ Get all projects",
      description: "Retrieve a list of all projects",
      items: [
        {
          title: "URL Request",
          code: "https://portfolio-cms-blond-five.vercel.app/api/projects",
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
        "updatedAt": "May 16, 10:17am",
        "id": 2,
        "title": "Library App",
        "description": "This is a book library app",
        "siteUrl": "https://github.com/example",
        "githubUrl": "https://github.com/example",
        "status": "Draft",
        "tags": [
            "HTML",
            "CSS"
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
      title: "✴︎ Get all published projects",
      description: "Retrieve a list of only published projects",
      items: [
        {
          title: "URL Request",
          code: "https://portfolio-cms-blond-five.vercel.app/api/projects/published",
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
      title: "✴︎ Get a single project",
      description: "Retrieve the details of a single project by ID",
      items: [
        {
          title: "URL Request",
          code: "https://portfolio-cms-blond-five.vercel.app/api/projects/1",
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
