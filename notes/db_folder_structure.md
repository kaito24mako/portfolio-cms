portfolio-cms/
│
├── app/ ← Next.js App Router
│ ├── layout.js
│ ├── page.js
│
│ ├── dashboard/ ← CMS UI pages
│ │ ├── page.js
│ │ └── projects/
│ │ ├── page.js
│ │ └── [id]/
│ │ └── page.js
│
│ ├── login/
│ │ └── page.js
│
│ ├── api/ ← 🔥 BACKEND (replaces Express)
│ │ ├── projects/
│ │ │ ├── route.js ← GET, POST
│ │ │ └── [id]/
│ │ │ └── route.js ← GET by id, PUT, DELETE
│ │ │
│ │ ├── users/
│ │ │ └── route.js
│ │ │
│ │ └── auth/
│ │ ├── login/
│ │ │ └── route.js
│ │ └── register/
│ │ └── route.js
│
├── components/ ← reusable UI components
│ ├── ui/
│ ├── forms/
│ └── layout/
│
├── lib/ ← shared logic (IMPORTANT)
│ ├── db.js ← initDB()
│ ├── auth.js ← JWT helpers
│ └── utils.js
│
├── models/ ← Sequelize models
│ ├── Project.js
│ └── User.js
│
├── controllers/ ← your migrated logic
│ ├── projects.js
│ └── users.js
│
├── utils/ ← low-level config
│ └── connection.js ← Sequelize connection
│
├── middleware.js ← (optional global auth)
│
├── public/
├── styles/
│
├── .env
├── package.json
└── next.config.js
