# Tic Tac Toe Game

A full-stack tic-tac-toe game built with React Router v7, TypeScript, and Vite. This project demonstrates modern React development practices including server-side rendering (SSR), component architecture, and game state management.

## Project Overview

This project is built using the React tic-tac-toe tutorial as a foundation but enhanced with modern tooling and React Router for full-stack capabilities.

## File Structure and Purpose

### Root Configuration Files

#### `package.json`
- **Purpose**: Defines project dependencies, scripts, and metadata
- **Key Features**:
  - Uses React Router v7 for both frontend routing and server-side rendering
  - Includes TypeScript for type safety
  - Uses Vite as the build tool
  - Configured for both development and production builds

#### `vite.config.ts`
- **Purpose**: Configuration file for Vite build tool
- **Features**:
  - Integrates React Router dev plugin for hot reloading
  - Includes Tailwind CSS support (though not extensively used)
  - Enables TypeScript path mapping for clean imports

#### `tsconfig.json`
- **Purpose**: TypeScript compiler configuration
- **Features**:
  - Configured for modern ES2022 target
  - Enables strict type checking
  - Sets up path aliases for the `app` directory
  - Includes React JSX transform

#### `react-router.config.ts`
- **Purpose**: React Router framework configuration
- **Features**:
  - Enables server-side rendering (SSR) by default
  - Can be modified to enable SPA mode if needed

#### `Dockerfile`
- **Purpose**: Container configuration for deployment
- **Features**:
  - Multi-stage build for optimized production image
  - Separates development and production dependencies
  - Uses Node.js 20 Alpine for lightweight container

### Application Files

#### `app/root.tsx`
- **Purpose**: Root layout component and application shell
- **Features**:
  - Defines the HTML document structure
  - Includes global CSS imports
  - Provides error boundary for application-wide error handling
  - Sets up meta tags, links, and scripts for the entire application

#### `app/routes.ts`
- **Purpose**: Route configuration for the application
- **Features**:
  - Maps the root path (`/`) to the Home page component
  - Uses React Router's file-based routing configuration

#### `app/pages/Home.tsx`
- **Purpose**: Main page component that renders the game
- **Features**:
  - Sets page metadata (title and description)
  - Renders the Game component from Board.tsx
  - Acts as the entry point for the tic-tac-toe game

#### `app/components/Board.tsx`
- **Purpose**: Core game logic and UI components
- **Features**:
  - **Square Component**: Individual clickable squares on the board
  - **Board Component**: 3x3 grid of squares with game status
  - **Game Component**: Main game controller with move history
  - **Game Logic**:
    - Tracks game state and player turns
    - Implements win detection algorithm
    - Maintains move history for time travel feature
    - Handles square clicks and game resets

#### `app/styles/board.css`
- **Purpose**: CSS styles for the tic-tac-toe game interface
- **Features**:
  - Styles for game board squares with borders and hover effects
  - Layout for game information panel
  - Typography and spacing for game status messages
  - Responsive design elements

## Game Features

1. **Interactive Gameplay**: Click squares to place X or O marks
2. **Turn Management**: Alternates between X and O players automatically
3. **Win Detection**: Automatically detects winning combinations
4. **Move History**: Track and review all moves made during the game
5. **Time Travel**: Jump back to any previous move in the game
6. **Game Status**: Shows current player turn and winner announcement

## Development Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run typecheck` - Run TypeScript type checking

## Technology Stack

- **React 19**: Latest React version with modern features
- **React Router v7**: Full-stack React framework with SSR
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server
- **CSS**: Custom styling for game interface
