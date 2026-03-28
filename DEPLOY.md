# 🚀 Vercel Deployment Guide

Deploy your premium portfolio to Vercel in just a few steps!

### 1. Git Setup
Ensure your local repository is pushed to **GitHub**, **GitLab**, or **Bitbucket**.

```bash
git add .
git commit -m "chore: prepare for deployment"
git push origin main
```

### 2. Import Project on Vercel
1.  Go to [Vercel](https://vercel.com).
2.  Click **"Add New"** > **"Project"**.
3.  Connect your GitHub account and **Import** the `portfolio` repository.

### 3. Configure Framework Preset
Vercel should automatically detect **Next.js**. Keep the settings as they are:
*   **Framework Preset**: `Next.js`
*   **Root Directory**: `./` (or `portfolio/` if it's in a subfolder)
*   **Build Command**: `next build`
*   **Output Directory**: `.next`

### 4. Environment Variables 🌍
Add the following key-value pairs in the **Environment Variables** section:
*   `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com` (or your future Vercel URL)
*   *Add any other API keys if you have them (e.g. for Contact form services).*

### 5. Finalize 🚀
Click **Deploy**! 

---

### 💡 Pro-Tips for Vercel
*   **Turbopack**: Vercel uses Turbopack for builds by default in Next.js 15+, which is extremely fast.
*   **Analytics**: Enable **Vercel Web Analytics** for real-time traffic monitoring.
*   **Custom Domain**: Under project settings, add your custom domain (e.g., `bhavinrajput.tech`).

**Deploy mazo aavshe! 😎💎🚀**
