export interface Project {
  id: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  content: {
    context: string;
    problem: string;
    approach: string;
    outcome: string;
    future?: string;
  };
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "project-alpha",
    title: "Project Alpha",
    summary: "A revolutionary way to manage tasks.",
    tags: ["React", "TypeScript", "Productivity"],
    content: {
      context: "Task management apps are often too complex.",
      problem: "Users spend more time managing tasks than doing them.",
      approach: "We stripped everything back to a single list.",
      outcome: "User retention increased by 40%.",
      future: "Adding collaborative features next.",
    },
  },
  {
    id: 2,
    slug: "ecommerce-redesign",
    title: "E-commerce Redesign",
    summary: "Boosting conversion for a major retailer.",
    tags: ["UX/UI", "Design System", "Conversion"],
    content: {
      context: "Client was seeing high cart abandonment.",
      problem: "Checkout flow was 5 steps long and confusing.",
      approach: "Simplified to a single-page checkout.",
      outcome: "Conversion rate jumped from 1.5% to 3.2%.",
      future: "Implementing personalization engine.",
    },
  },
  {
    id: 3,
    slug: "personal-finance-dashboard",
    title: "Finance Dashboard",
    summary: "Visualizing spending habits in real-time.",
    tags: ["Data Viz", "D3.js", "Finance"],
    content: {
      context: "Most bank interfaces are text-heavy tables.",
      problem: "Users couldn't intuitively understand their spending.",
      approach: "Built interactive charts and spending categories.",
      outcome: "Users engaged with the app 3x more often.",
      future: "Adding predictive budgeting AI.",
    },
  },
  {
    id: 4,
    slug: "chess-game-analyzer",
    title: "Chess Game Analyzer",
    summary: "A tool that analyzes your chess.com games using Stockfish engine to help you improve.",
    tags: ["Next.js", "Stockfish", "Chess.com API", "Tailwind CSS"],
    content: {
      context: "One Ramadan night I found myself playing game after game on chess.com. I wanted to review my games and figure out where things went wrong, but chess.com locks analysis behind a premium subscription. I wasn't looking for anything fancy  just a simple way to understand my mistakes.",
      problem: "Chess players want to understand their mistakes and improve, but most analysis tools are either too complex or locked behind paid subscriptions. For a casual player who just wants to know \"where did I go wrong?\", there's no fast, free, zero-setup option.",
      approach: "The app is built with Next.js and works entirely in the browser (no backend, no server costs.)\n\nFirst, it connects to the chess.com public API. You type in any username and it pulls their data (recent games, ratings, time controls, results, everything.)\n\nThe real magic is Stockfish. It's the strongest open-source chess engine ever built rated over 3500 ELO (for context, Magnus Carlsen peaked around 2882). Stockfish uses a hybrid evaluation system: classical alpha-beta search pruning combined with NNUE (Efficiently Updatable Neural Network), which was trained on billions of positions. It doesn't just calculate moves it understands patterns.\n\nI compiled Stockfish to WebAssembly using Emscripten, so the entire engine runs client-side in a Web Worker. No server. When you select a game, the app parses the PGN, replays every move through Stockfish, and records the centipawn evaluation at each position. A centipawn swing of +200 to -150 after your move? That's a blunder — and the app flags it.\n\nThe UI is intentionally minimal. Dark theme, clean typography, and a move list that highlights exactly where you lost the game. No distractions. You open it, search your name, pick a game, and within seconds you see every mistake laid out clearly.",
      outcome: "What started as a Ramadan side project became a fully functional analysis tool. Any chess.com player can now get engine-level game review — for free, instantly, with zero setup. The entire analysis runs in the browser, which means it costs nothing to host and scales to any number of users.",
      future: "The biggest lesson was that WebAssembly changes everything. Running a C++ chess engine at near-native speed inside a browser tab with no server, no API costs, no infrastructure felt like a cheat code. It proved that heavy computation doesn't need a backend anymore.",
    },
    link: "https://chess-viewer-sigma.vercel.app",
  },
  {
    id: 5,
    slug: "open-source-library",
    title: "Open Source UI Lib",
    summary: "A lightweight component library for rapid prototyping.",
    tags: ["Open Source", "npm", "Community"],
    content: {
      context: "Existing libraries were too heavy.",
      problem: "Developers needed something quick and unopinionated.",
      approach: "Created a headless component system.",
      outcome: "10k stars on GitHub in first month.",
      future: "Expanding accessibility support.",
    },
  },
];
