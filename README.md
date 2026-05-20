# GitHub Profile Finder

A full-stack GitHub Profile Finder application built using React.js, Spring Boot, and PostgreSQL.

Users can search any GitHub username and view profile details such as followers, repositories, bio, and more. The application also stores recent searches in a PostgreSQL database.

---

## Features

- Search GitHub users
- Fetch live data from GitHub API
- View profile details
- Recent search history
- Responsive UI
- Loading spinner
- Error handling
- Full-stack architecture
- PostgreSQL database integration
- REST API backend

---

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST API

### Database
- PostgreSQL (Supabase)

### Deployment
- Frontend: Vercel
- Backend: Render
- Docker

---

## Project Structure

```bash
github-profile-finder/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
