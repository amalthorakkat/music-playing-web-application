


# VoiceOn | spotify clone

This is a Spotify Clone built using **React**, **Vite**, **TailwindCSS**, and **React Router**. It mimics the basic functionality of Spotify, including album display, song playback, and navigation.

## Features

- **Responsive Design**: Built with TailwindCSS for a modern and responsive UI.
- **Audio Player**: Play, pause, and navigate through songs with a custom audio player.
- **Dynamic Albums and Songs**: Displays albums and songs dynamically using mock data.
- **Routing**: Navigate between home and album pages using React Router.
- **Context API**: Manages player state (e.g., current track, play status) using React Context.

## Project Structure

```
spotify-clone/
├── public/                # Public assets
├── src/
│   ├── assets/            # Images, icons, and mock data
│   ├── components/        # Reusable React components
│   ├── context/           # Context API for player state
│   ├── App.jsx            # Main app component
│   ├── AppData.jsx        # App layout and structure
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/spotify-clone.git
   cd spotify-clone
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **TailwindCSS**: For styling the application.
- **React Router**: For navigation and routing.
- **ESLint**: For maintaining code quality.

## Mock Data

The mock data for albums and songs is located in [`src/assets/assets.js`](src/assets/assets.js). You can modify this file to add or update albums and songs.

