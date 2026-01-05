# STLVGMO Website

Official website for the St. Louis Video Game Music Orchestra (STLVGMO) - bringing epic video game soundtracks to life through live orchestral performances.

## 🎵 About

STLVGMO is a community-based orchestra dedicated to performing video game music in St. Louis. This website serves as our digital home, featuring concert information, blog posts, photo galleries, and ways to support our mission.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with Gray Matter
- **Email**: Nodemailer (contact form)
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/stlvgmo-website.git
   cd stlvgmo-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Email Configuration (for contact form)
   SMTP_HOST=smtp.your-provider.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-password
   CONTACT_EMAIL=info@stlvgmo.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
stlvgmo-website/
├── public/
│   ├── assets/
│   │   ├── blog/          # Blog post images
│   │   ├── gallery/       # Photo gallery images
│   │   └── logos/         # Brand assets
│   ├── favicon/           # Favicon files
│   └── robots.txt         # SEO robots file
├── src/
│   ├── app/
│   │   ├── _components/   # Reusable React components
│   │   ├── about/         # About page
│   │   ├── api/           # API routes (contact form)
│   │   ├── contact/       # Contact page
│   │   ├── donate/        # Donation page
│   │   ├── gallery/       # Photo gallery
│   │   ├── posts/         # Blog posts listing
│   │   ├── program/       # Concert program viewer
│   │   ├── search/        # Search functionality
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   └── not-found.tsx  # 404 page
│   ├── interfaces/        # TypeScript interfaces
│   └── lib/
│       ├── api.ts         # Content fetching functions
│       ├── constants.ts   # Site constants
│       └── markdownToHtml.ts
├── _posts/                # Blog post markdown files
├── _events/               # Event markdown files
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new markdown file in `_posts/` directory
2. Add frontmatter with required fields:

   ```markdown
   ---
   title: "Your Post Title"
   excerpt: "Brief description"
   coverImage: "/assets/blog/your-image.jpg"
   date: "2025-01-15T00:00:00.000Z"
   author:
     name: "Author Name"
     picture: "/assets/blog/authors/author.jpg"
   ogImage:
     url: "/assets/blog/your-image.jpg"
   ---

   Your content here...
   ```

### Adding Gallery Images

1. Add images to `public/assets/gallery/`
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
3. Images automatically appear on homepage carousel and gallery page

### Updating Organization Info

Edit `src/lib/constants.ts` to update:

- Organization details
- Rehearsal information
- Social media links
- Contact information

## 🎨 Customization

### Colors

Brand colors are defined in `tailwind.config.ts`:

- Primary (Blue): `#1b3eda`
- Accent (Orange): `#f9a922`

### Components

Reusable components are in `src/app/_components/`:

- `header.tsx` - Navigation
- `footer.tsx` - Footer with social links
- `gallery-carousel.tsx` - Homepage image carousel
- `gallery-grid.tsx` - Gallery page grid
- And more...

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform supporting Next.js:

- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

Build command: `npm run build`
Start command: `npm start`

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server

## 🌐 Environment Variables

Required environment variables:

| Variable        | Description       | Example            |
| --------------- | ----------------- | ------------------ |
| `SMTP_HOST`     | Email server host | `smtp.porkbun.com` |
| `SMTP_PORT`     | Email server port | `587`              |
| `SMTP_USER`     | Email username    | `info@stlvgmo.com` |
| `SMTP_PASSWORD` | Email password    | `your-password`    |
| `CONTACT_EMAIL` | Recipient email   | `info@stlvgmo.com` |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by STLVGMO.

## 📞 Contact

- **Website**: [https://stlvgmo.com](https://stlvgmo.com)
- **Email**: info@stlvgmo.com
- **Facebook**: [STLVGMO](https://www.facebook.com/profile.php?id=61580180991038)
- **Instagram**: [@stlvgmo](https://www.instagram.com/stlvgmo/)
- **YouTube**: [@STLVGMO](https://www.youtube.com/@STLVGMO)

## 🎯 Roadmap

- [ ] Add event calendar integration
- [ ] Implement member portal
- [ ] Add audio/video player for performances
- [ ] Create newsletter signup
- [ ] Add ticket purchasing system
- [ ] Implement analytics dashboard

## 🙏 Acknowledgments

- Logo design by Julien Leigh Kaufman (@tamberwolf)
- Built with Next.js and Tailwind CSS
- Hosted on Vercel

---

Made with ❤️ by the STLVGMO team
