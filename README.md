# Search movies

## Overview
This project allows users to search for movies and renders the results based on the user's input. It includes validations to ensure accurate and relevant search results. The project uses the iOMDb API as the data source for fetching and displaying movie details.

### Table of Contents
- Features
- Technologies Used
- Project Structure
- API Integration
- previews
- Installation
- Install Dependencies
- Run the Application



## Features
- ```Search Functionality```: Users can search for movies by title.
- ```Real-time Data Rendering```: Movie details, including title, year, genre, director, and plot, are rendered in real-time based on the user's search.
- ```Input Validations```: The application includes input validation to ensure that users enter valid search queries.
- ```Responsive Design```: The interface is responsive, providing a seamless experience across different devices

## Technologies Used

- ```React```: Used for building the user interface and managing component states.
- ```Vite```: Utilized as the development environment and build tool for its fast performance and efficient bundling.
- ```CSS```: For styling the application, ensuring a clean and responsive design.

## Project struture

```
docs
 ┗ images
 ┃ ┣ doc1.png
 ┃ ┗ doc2.png
 public
 ┗ images
 ┃ ┗ icon.jpg
 src
 ┣ assets
 ┃ ┗ stylesheets
 ┃ ┃ ┗ App.css
 ┣ components
 ┃   ┣ App.jsx
 ┃   ┣ Form.jsx
 ┃   ┣ Form.txt
 ┃   ┗ Movies.jsx
 ┣ context
 ┃   ┗ MovieContext.jsx
 ┣ hooks
 ┃   ┣ useFetch.js
 ┃   ┣ useFormRef.js
 ┃   ┣ useFormValid.js
 ┃   ┗ useMovie.js
 ┣ services
 ┃ ┗ fetchService.js
 ┣ util
 ┃ ┗ buildUriSearch.js
 ┗ main.jsx
 ┣ .env
 ┣ .gitignore
 ┣ eslint.config.js
 ┣ index.html
 ┣ package.json
 ┣ pnpm-lock.yaml
 ┣ README.md
 ┗ vite.config.js
```

## API Integration
iOMDb API: The application interacts with the iOMDb API to fetch movie data. Ensure that your API key is valid and properly configured in the .env file.


## Previews
![doc1_image](/docs/images/doc1.png)

![doc2_image](/docs/images/doc2.png)

###  Installation 
```
git clone https://github.com/JUANDGG/search_movies.git
cd search_movies
```

### Install Dependencies:
```
pnpm install
```

### Run the Application:
```
pnpm run dev
```


