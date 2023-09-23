# blogIyt-simple blogging platform

## Overview

This is a simple blogging platform built using React for the frontend and Appwrite as the backend. The platform provides basic blogging features such as user registration, login, the ability to create and edit blog posts, and image optimization for a seamless blogging experience.

## Features

### User Authentication

- Users can register and create an account on the platform.
- Registered users can log in securely to access their account.

### Blog Post Management

- Users can create, edit, and delete their blog posts.
- Each blog post includes a title, content, and an optional image.
- The platform provides a rich text editor for composing and formatting blog content.

## Getting Started

To get started with this blogging platform, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/abhiraj-ku/blogiyt
   ```

2. Install the required dependencies for the frontend:

   ```
   cd blogIyt
   npm install

   ```

   - Visit the [Appwrite website](https://appwrite.io/) and create a new project.
   - Set up the Appwrite server according to your needs, including database setup and API keys.
   - Update the Appwrite configuration in the frontend to connect to your Appwrite backend. You can find the configuration in `src/config.js`.

3. Start the frontend development server:

   ```
   npm start
   ```

## Usage

1. Register for a new account on the platform if you haven't already.
2. Log in using your credentials.
3. Create a new blog post by clicking the "Create Post" button.
4. Fill in the title, content, and optionally upload an image for your blog post.
5. Save the blog post, and it will be published on the platform.
6. You can edit or delete your blog posts from the dashboard.

## Technologies Used

- **React:** The frontend is built using React, a popular JavaScript library for building user interfaces.
- **Appwrite:** The backend is powered by Appwrite, an open-source backend server that simplifies backend development.
- **TailwindCSS** The styling is done using popular CSS library TailwindCSS

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, Just Fork and clone it & start Contributing

Happy blogging!
