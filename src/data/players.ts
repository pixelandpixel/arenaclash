export interface RecentMatch {
  opponent: string;
  result: "win" | "loss" | "no-result";
  score: string;
  overs: string;
  date: string;
  opponentScore?: string;
}

export interface Player {
  slug: string;
  name: string;
  initials: string;
  team: string;
  role: string;
  color: string;
  teamSide: "red" | "blue";
  image: string;
  photo: string;
  rank: number;
  tier: "gold" | "silver";
  matches: number;
  runs: number;
  wickets: number;
  sr: number;
  avg: number;
  economy: number;
  highScore: number;
  fifties: number;
  hundreds: number;
  bestBowling: string;
  age: number;
  city: string;
  joinedYear: number;
  bio: string;
  recentMatches: RecentMatch[];
}

export const players: Player[] = [
  {
    slug: "rajesh-kumar",
    name: "Rajesh Kumar",
    initials: "RJ",
    team: "Mumbai Strikers",
    role: "Opening Batsman",
    color: "oklch(52% 0.22 25)",
    teamSide: "red",
    image: "RJ",
    photo: "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=400&q=80",
    rank: 1,
    tier: "gold",
    matches: 14,
    runs: 847,
    wickets: 0,
    sr: 168.4,
    avg: 60.5,
    economy: 0,
    highScore: 132,
    fifties: 6,
    hundreds: 2,
    bestBowling: "-",
    age: 24,
    city: "Mumbai",
    joinedYear: 2024,
    bio: "Rajesh started playing tennis-ball cricket on the narrow streets of Dharavi. By 16 he was the top scorer in his local league. Now he opens for Mumbai Strikers with a strike rate that puts him among the most feared batsmen in the circuit. His 132 off 48 balls in the 2026 Floodlit Derby is still the highest individual score in Arena Clash history.",
    recentMatches: [
      { opponent: "Delhi Titans", result: "win", score: "87*(42)", overs: "7.3", date: "28 May 2026", opponentScore: "167/6" },
      { opponent: "Chennai Smashers", result: "win", score: "45(28)", overs: "4.2", date: "22 May 2026", opponentScore: "142/8" },
      { opponent: "Pune Panthers", result: "loss", score: "23(18)", overs: "3.0", date: "15 May 2026", opponentScore: "178/5" },
      { opponent: "Kolkata Kings", result: "win", score: "112(58)", overs: "9.4", date: "8 May 2026", opponentScore: "165/7" },
      { opponent: "Chennai Smashers", result: "win", score: "67(34)", overs: "5.2", date: "1 May 2026", opponentScore: "154/9" },
    ],
  },
  {
    slug: "imran-shaikh",
    name: "Imran Shaikh",
    initials: "IS",
    team: "Delhi Titans",
    role: "Fast Bowler",
    color: "oklch(48% 0.14 250)",
    teamSide: "blue",
    image: "IS",
    photo: "https://images.unsplash.com/photo-1524429656589-6633a470097c?auto=format&fit=crop&w=400&q=80",
    rank: 2,
    tier: "gold",
    matches: 12,
    runs: 42,
    wickets: 42,
    sr: 0,
    avg: 0,
    economy: 6.2,
    highScore: 18,
    fifties: 0,
    hundreds: 0,
    bestBowling: "4/18",
    age: 26,
    city: "Delhi",
    joinedYear: 2024,
    bio: "Imran bowls raw pace on concrete wickets. Discovered at a local trial in West Delhi, his yorker length and relentless accuracy made him the leading wicket-taker two seasons running. He trains by bowling at a tyre on a wall. When he hits the blockhole at 140+ clicks, batsmen back away.",
    recentMatches: [
      { opponent: "Mumbai Strikers", result: "loss", score: "2/28(4)", overs: "4.0", date: "28 May 2026", opponentScore: "184/4" },
      { opponent: "Kolkata Kings", result: "win", score: "4/18(4)", overs: "4.0", date: "20 May 2026", opponentScore: "112/10" },
      { opponent: "Pune Panthers", result: "win", score: "3/22(3.2)", overs: "3.2", date: "12 May 2026", opponentScore: "134/8" },
      { opponent: "Chennai Smashers", result: "loss", score: "1/35(4)", overs: "4.0", date: "5 May 2026", opponentScore: "178/6" },
      { opponent: "Mumbai Strikers", result: "win", score: "2/19(3.5)", overs: "3.5", date: "28 Apr 2026", opponentScore: "145/9" },
    ],
  },
  {
    slug: "vikram-singh",
    name: "Vikram Singh",
    initials: "VS",
    team: "Mumbai Strikers",
    role: "All-Rounder",
    color: "oklch(52% 0.22 25)",
    teamSide: "red",
    image: "VS",
    photo: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80",
    rank: 3,
    tier: "silver",
    matches: 14,
    runs: 612,
    wickets: 18,
    sr: 189.4,
    avg: 43.7,
    economy: 7.8,
    highScore: 89,
    fifties: 4,
    hundreds: 0,
    bestBowling: "3/26",
    age: 22,
    city: "Pune",
    joinedYear: 2025,
    bio: "Vikram grew up playing on the dusty grounds of Pune. His unorthodox sling-action bowling and six-hitting ability made him the most valuable uncapped player in the league. He models his game on Hardik Pandya but his hero is his older brother who coached him on a patch of ground behind their chawl.",
    recentMatches: [
      { opponent: "Delhi Titans", result: "win", score: "67(31) & 2/26(3)", overs: "3.0", date: "28 May 2026" },
      { opponent: "Chennai Smashers", result: "win", score: "34(22) & 1/18(2)", overs: "2.0", date: "22 May 2026" },
      { opponent: "Pune Panthers", result: "loss", score: "12(8) & 0/31(2)", overs: "2.0", date: "15 May 2026" },
      { opponent: "Kolkata Kings", result: "win", score: "78(42) & 2/22(3.2)", overs: "3.2", date: "8 May 2026" },
      { opponent: "Chennai Smashers", result: "win", score: "45(28) & 1/19(2.5)", overs: "2.5", date: "1 May 2026" },
    ],
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    initials: "PS",
    team: "Chennai Smashers",
    role: "Wicket-Keeper",
    color: "oklch(48% 0.14 250)",
    teamSide: "blue",
    image: "PS",
    photo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80",
    rank: 4,
    tier: "silver",
    matches: 11,
    runs: 534,
    wickets: 0,
    sr: 145.2,
    avg: 48.5,
    economy: 0,
    highScore: 94,
    fifties: 5,
    hundreds: 0,
    bestBowling: "-",
    age: 21,
    city: "Chennai",
    joinedYear: 2025,
    bio: "Priya is the only woman in the league and one of its most electric wicket-keepers. She captained her college team to three state titles before Arena Clash scouted her at an open trial. Her reflexes behind the stumps are unmatched and she bats with the calm of someone who has nothing to prove.",
    recentMatches: [
      { opponent: "Mumbai Strikers", result: "loss", score: "56(38)", overs: "6.2", date: "22 May 2026" },
      { opponent: "Delhi Titans", result: "win", score: "42(31)", overs: "5.0", date: "18 May 2026" },
      { opponent: "Pune Panthers", result: "loss", score: "24(18)", overs: "3.2", date: "10 May 2026" },
      { opponent: "Kolkata Kings", result: "win", score: "94(56)", overs: "8.4", date: "3 May 2026" },
      { opponent: "Mumbai Strikers", result: "loss", score: "38(27)", overs: "4.4", date: "26 Apr 2026" },
    ],
  },
  {
    slug: "arun-patel",
    name: "Arun Patel",
    initials: "AP",
    team: "Pune Panthers",
    role: "Spin Bowler",
    color: "oklch(52% 0.22 25)",
    teamSide: "red",
    image: "AP",
    photo: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=400&q=80",
    rank: 5,
    tier: "silver",
    matches: 10,
    runs: 89,
    wickets: 28,
    sr: 0,
    avg: 0,
    economy: 5.8,
    highScore: 34,
    fifties: 0,
    hundreds: 0,
    bestBowling: "4/14",
    age: 28,
    city: "Pune",
    joinedYear: 2024,
    bio: "Arun is a classical finger-spinner in a format that rewards pace. His loop, flight, and subtle variations make him the most economical bowler in the league. He learned cricket watching YouTube tutorials between shifts at his family's tea stall. Now he teaches spin camps to neighborhood kids on his rest days.",
    recentMatches: [
      { opponent: "Mumbai Strikers", result: "loss", score: "1/24(4)", overs: "4.0", date: "15 May 2026" },
      { opponent: "Chennai Smashers", result: "win", score: "4/14(3.5)", overs: "3.5", date: "9 May 2026" },
      { opponent: "Delhi Titans", result: "loss", score: "2/31(4)", overs: "4.0", date: "2 May 2026" },
      { opponent: "Kolkata Kings", result: "win", score: "1/19(4)", overs: "4.0", date: "25 Apr 2026" },
      { opponent: "Mumbai Strikers", result: "loss", score: "3/22(3.4)", overs: "3.4", date: "18 Apr 2026" },
    ],
  },
  {
    slug: "sandeep-yadav",
    name: "Sandeep Yadav",
    initials: "SY",
    team: "Kolkata Kings",
    role: "Opening Batsman",
    color: "oklch(48% 0.14 250)",
    teamSide: "blue",
    image: "SY",
    photo: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=400&q=80",
    rank: 6,
    tier: "silver",
    matches: 13,
    runs: 723,
    wickets: 2,
    sr: 156.7,
    avg: 55.6,
    economy: 8.5,
    highScore: 108,
    fifties: 5,
    hundreds: 1,
    bestBowling: "1/12",
    age: 25,
    city: "Kolkata",
    joinedYear: 2024,
    bio: "Sandeep is the most technically correct batsman in the league. He was trained at a proper cricket academy before choosing tennis-ball over hard-ball cricket. His cover drive on the up is the most replayed shot in Arena Clash highlights. He keeps a handwritten journal of every innings he plays.",
    recentMatches: [
      { opponent: "Mumbai Strikers", result: "loss", score: "43(31)", overs: "5.0", date: "8 May 2026" },
      { opponent: "Delhi Titans", result: "loss", score: "67(42)", overs: "7.0", date: "1 May 2026" },
      { opponent: "Pune Panthers", result: "loss", score: "108(56)", overs: "9.2", date: "24 Apr 2026" },
      { opponent: "Chennai Smashers", result: "win", score: "89(52)", overs: "8.4", date: "17 Apr 2026" },
      { opponent: "Mumbai Strikers", result: "loss", score: "34(22)", overs: "3.4", date: "10 Apr 2026" },
    ],
  },
];

export function getPlayerBySlug(slug: string): Player | undefined {
  return players.find((p) => p.slug === slug);
}
