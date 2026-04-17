# Joseph's Research Portfolio

A modern, dynamic portfolio showcasing research in cybersecurity, AI, and data science. Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- **🚀 Dynamic Content**: Auto-syncs skills and projects from GitHub
- **⚡ Performance**: Next.js 15 with App Router and Server Components
- **🎨 Modern Design**: Beautiful UI with Framer Motion animations
- **📱 Responsive**: Mobile-first design
- **🔄 Auto-Deploy**: GitHub Actions CI/CD pipeline
- **♿ Accessible**: WCAG compliant components
- **🔍 SEO Optimized**: Meta tags and structured data

## 🏗️ Architecture

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── magicui/          # UI component library
│   ├── hero-section.tsx
│   ├── portfolio-bento.tsx
│   ├── research-showcase.tsx
│   └── ...
├── lib/                   # Utilities and services
│   ├── profile.ts        # Static profile data
│   ├── github.ts         # GitHub API integration
│   ├── config.ts         # Configuration
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- GitHub account (for token generation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rose1996iv/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Get your GitHub token: https://github.com/settings/tokens
   - Create a token with `public_repo` scope
   - Add it to `.env.local`:
     ```
     GITHUB_TOKEN=your_token_here
     ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 15** | React framework |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Lucide Icons** | Icon library |
| **GitHub API** | Dynamic content |

## 🔄 Auto-Update System

The portfolio **automatically updates** when you:
- ⭐ Update repository stars
- 📝 Update repository descriptions
- 🏷️ Add topic tags to repositories
- 🌐 Update GitHub profile

### How It Works

1. **GitHub API Integration** (`lib/github.ts`)
   - Fetches repos, user data, and stats
   - Caches responses for 5 minutes
   - Revalidates every hour

2. **Dynamic Profile** (`lib/profile.ts`)
   - Combines static data with GitHub data
   - Extracts skills from repositories
   - Updates project information

3. **Server Components**
   - Components fetch and render dynamic data
   - Built-in caching and revalidation
   - Fallback to static data if API fails

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Project Structure
- `app/page.tsx` - Home page layout
- `lib/profile.ts` - Portfolio data (update this for custom info)
- `components/` - Reusable React components
- `tailwind.config.ts` - Design tokens and colors

## 🚀 Deployment

### GitHub Pages
The project includes GitHub Actions for automatic deployment:

1. **Set up GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to GitHub Actions

2. **Deploy**
   - Push to main branch
   - Actions automatically build and deploy

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Connect Git, add env vars, deploy
- **Self-hosted**: Run `npm run build && npm start`

## 🔐 Security

- ✅ All secrets in `.env.local` (git-ignored)
- ✅ GitHub token with limited scope
- ✅ No sensitive data in code
- ✅ API responses cached server-side

## 📊 Customization

### Update Profile Information
Edit `lib/profile.ts`:
```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};
```

### Add GitHub Token
1. Generate token at https://github.com/settings/tokens
2. Add to `.env.local`
3. Restart development server

### Modify Colors
Edit `tailwind.config.ts`:
```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        // Update colors here
      },
    },
  },
};
```

## 📈 Analytics

To enable Google Analytics:
1. Set `NEXT_PUBLIC_GTM_ID` in `.env.local`
2. Update `lib/config.ts` to enable analytics
3. Implement tracking in components

## 🤝 Contributing

Improvements welcome! Fork, create a branch, make changes, and submit a PR.

## 📄 License

MIT License - feel free to use this as your portfolio template!

## 🙋 Support

If you have questions:
- Open an issue
- Check GitHub Discussions
- Email: josephsaimonn@gmail.com

---

**Made with ❤️ by Joseph**
- GitHub: [@rose1996iv](https://github.com/rose1996iv)
- LinkedIn: [Joseph](https://www.linkedin.com/in/joseph-61734a17a/)
