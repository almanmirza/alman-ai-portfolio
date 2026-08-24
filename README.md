# Alman Ahmad — AI/ML Portfolio

A premium Apple-inspired AI portfolio built with Next.js, React and Framer Motion.

## 1. Requirements

Install Node.js 20.9+ (current Next.js documentation recommends Node 20.9 or newer).

Then open a terminal in this folder:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## 2. What is already included

- Apple-inspired minimalist visual system
- Large typography and high contrast
- Smooth scroll behavior
- Scroll progress bar
- Framer Motion reveal animations
- Parallax-style hero orbs
- Hover lift animations
- Responsive mobile layout
- Projects section
- Experience timeline
- Skills section
- Education section
- Direct email CTA
- SEO metadata
- Recruiter-friendly contact area

## 3. Personalize it

The main content is in:

```text
app/page.tsx
```

Change:
- Email
- LinkedIn URL
- GitHub URL
- Project descriptions
- Experience
- Skills
- Domain/name

Your uploaded CV was used as the source for the portfolio content.

## 4. Add your photo

Put a professional headshot in:

```text
public/profile.jpg
```

Then add it to the About section in `app/page.tsx` using Next.js Image if you want a photo.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial AI portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/alman-ai-portfolio.git
git push -u origin main
```

## 6. Deploy to Vercel

1. Create/sign in to Vercel.
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Let Vercel detect Next.js automatically.
5. Click Deploy.

After deployment, Vercel gives you a temporary `*.vercel.app` address.

## 7. Connect your own domain

Example:

```text
almanahmad.com
```

In Vercel:

1. Open your project.
2. Go to **Settings → Domains**.
3. Add your domain.
4. Vercel will show the DNS records required for your domain.
5. Open the DNS management panel at the company where you purchased the domain.
6. Add the exact records Vercel gives you.
7. Wait for DNS verification.
8. Set the domain as the primary domain.

If your registrar supports it, you can also transfer DNS management to the provider recommended by Vercel.

Do not invent DNS records yourself; use the exact values shown by Vercel for your project.

## 8. Recommended domain strategy

Best options:

- almanahmad.com
- almanahmad.ai
- almanahmad.dev
- almanahmad.me

For recruiters, `.com` is the strongest general-purpose choice if it is available.

## 9. Recruiter optimization

Your homepage should make these immediately visible:

1. Your name
2. AI/ML Engineer title
3. Strong one-line positioning
4. Best 3–6 projects
5. Experience
6. GitHub
7. LinkedIn
8. Email
9. Resume/CV download

The current design intentionally keeps the contact CTA near the bottom and in the navigation. Add a `public/Alman-Ahmad-CV.pdf` file and a "Download CV" button when ready.

## 10. Production updates

After the first deployment, every push to your GitHub main branch can trigger a new Vercel deployment.

Typical workflow:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel then builds and publishes the updated site.

## 11. Before going public

Replace the placeholder LinkedIn and GitHub URLs in `app/page.tsx`.

Also verify:
- email address
- project names
- experience dates
- CV download
- mobile layout
- social links
- custom domain
- favicon
- Open Graph preview

"# alman-ai-portfolio" 
