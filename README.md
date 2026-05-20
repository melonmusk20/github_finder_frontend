# GitHub Profile Finder

A full-stack GitHub Profile Finder application built using React.js, Spring Boot, and PostgreSQL.

This application allows users to search GitHub profiles and view details such as followers, repositories, bio, profile image, and more using the GitHub Public API.

The app also stores recent searches in a PostgreSQL database.

---

# Live Demo

## Frontend Deployment

https://github-finder-frontend-iqrkwux4v-melonmusk20s-projects.vercel.app

## Backend Deployment

https://github-finder-backend-ldkq.onrender.com

---

# Features

- Search GitHub users
- Fetch live GitHub profile data
- Display followers, repos, bio, avatar, etc.
- Recent search history
- Responsive UI
- Loading spinner
- Error handling
- REST API integration
- PostgreSQL database support
- Full-stack architecture

---

# Tech Stack

## Frontend
- React.js
- Axios
- CSS

## Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs

## Database
- PostgreSQL (Supabase)

## Deployment
- Vercel
- Render
- Docker

---

# Project Structure

```bash
github_finder_frontend/
│
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

# API Used

GitHub Public API

```bash
https://api.github.com/users/{username}
```

---

# Frontend Setup

Clone the repository:

```bash
git clone https://github.com/melonmusk20/github_finder_frontend.git
```

Go inside project folder:

```bash
cd github_finder_frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Runs on:

```bash
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file in root directory:

```env
REACT_APP_API_URL=https://github-finder-backend-ldkq.onrender.com
```

---

# Backend API Endpoints

Get GitHub profile:

```bash
GET /github/{username}
```

Get recent searches:

```bash
GET /github/history
```

---

# Screenshots

Add project screenshots here.

---

# Future Improvements

- Dark mode
- Repository listing
- Search suggestions
- Better animations
- Pagination
- User authentication

---

# Author

Purbasa Maharana

GitHub:
https://github.com/melonmusk20
