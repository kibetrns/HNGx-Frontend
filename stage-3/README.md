# See it Live [here](https://kibetrns-hngxfrontend-stage3.onrender.com/)

# See the [desgin file](https://www.figma.com/file/w8SFbX3zM4wvDxqwGBwjWh/HNGx_Stage-3?type=design&node-id=2%3A65&mode=design&t=PqbiuTgQnPWD8PIQ-1)


# Running the App

This guide will walk you through the steps to Stage 3 application.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Make sure NPM is installed and running on your machine.

- A web browser. 

Clone the HNGx-Frontend and navigate to stage-2 directory:
```
git clone https://github.com/kibetrns/HNGx-Frontend.git
```
Navigate to stage-3 directory
```
cd stage-3
```
Install packages
```
npm install
```
Run the app:
```
npm run dev
```

The application should be accessible at http://localhost:5173/


# Objective

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.

# Requirements
1. Simple Authentication

This means login with this email and password:
`UserName: user@example.com`
`Password: 1Password`
The authentication form fields should have proper validation setup, with proper error messages. You do not need to implement this on the backend yourself, you could use solutions like NextAuth, Auth0 or Clerk, firebase for Auth or add etc.

2. Image Display:

Display a grid layout that showcases a collection of images presented in a visually appealing manner with consistent spacing and sizing, add a tag to each image.

3.  Loading state

The page should have a loading state for when images are not ready for display, display a skeleton loader or a loading spinner when loading is true

4. Search Functionality

You should have a search field that filters the image list based on the tags added to the images.

5.  Drag-and-Drop:

Implement the ability for users to drag and drop images within the gallery.

6. Search Functionality

You should have a search field that filters the image list based on the tags added to the images

7.  Drag-and-Drop:

Implement the ability for users to drag and drop images within the gallery.

8. Search Functionality

Incorporate smooth animations and visual cues that provide feedback during drag and drop interactions.

9. Responsive Design

Ensure that the gallery is responsive and functions seamlessly on different devices, including mobile phones, tablets, and desktops.

10. Design Flexibility

While adhering to the above requirements, you have the creative freedom to come up with a unique and appealing design.

## Acceptance Criteria

Ensure that the gallery is responsive and functions seamlessly on different devices, including mobile phones, tablets, and desktops.
- Functional Authentication: A fully functional authentication process.
- Drag-and-Drop Feature: A fully functional drag and drop feature must be implemented.
- Responsiveness: Design must be responsive across various desktop  screens, including mobile and tablet screens.
- User Experience: Design must be intuitive, appealing, and encourage easy navigation and operation (i.e., NO LAGGING).
- Image Display: All Images should have consistent spacing and sizing.

## Submission Mode
- Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
- Provide clear instructions on how to run your project locally in your README.md file.
- Ensure that the code is well-documented and organized.