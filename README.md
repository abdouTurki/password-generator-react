
# Password Generator React

This is a simple React application to generate random passwords based on user-defined options, such as including lowercase letters, uppercase letters, numbers, and special characters.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Running the Project](#running-the-project)
    - [Using Docker Compose](#using-docker-compose)
    - [Using pnpm](#using-pnpm)
- [License](#license)

## Project Structure

```
password-generator-react
├── dist
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── checkBox
│   │   ├── icons
│   │   ├── InputRange
│   │   ├── password-generator
│   │   └── PasswordInput
│   ├── helpers
│   │   └── passwordUtils.ts
│   ├── hooks
│   │   └── useGeneratePassword.ts
│   ├── types
│   │   └── passwordOptions.ts
│   ├── App.scss
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- For Docker Compose: [Docker](https://www.docker.com/get-started)
- For pnpm: [pnpm](https://pnpm.io/installation)

### Installation

Clone the repository:

```bash
git clone https://github.com/abdouTurki/password-generator-react.git
cd password-generator-react
```

## Running the Project

### Using Docker Compose

To run the project using Docker Compose, execute the following commands:

```bash
docker-compose up --build
```

This will build the Docker image and start the application. The application should now be running at [http://localhost:3000](http://localhost:3000).

### Using pnpm

To run the project directly using pnpm, execute the following commands:

```bash
pnpm install
pnpm run dev
```

This will install the necessary dependencies and start the application in development mode. The application should now be running at [http://localhost:3000](http://localhost:3000).
