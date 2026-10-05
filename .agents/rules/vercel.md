# Vercel Deployment & Platform Rules

Use Vercel guidance for deployment, edge routing, caching, and CI/CD operations:

- **Next.js App Router**: Deploy using Next.js 16 with Turbopack optimizations.
- **Environment Management**: Use `vercel env` or GitHub repository secrets connected to Vercel.
- **Routing & Edge**: Use `vercel.json` for security headers, caching headers (`public, max-age=31536000, immutable` for static assets), and rewrites.
- **Build Verification**: Ensure `npm run build` succeeds locally before pushing to `main`.
- **MCP Integration**: Official Vercel MCP is active at `https://mcp.vercel.com` for inspecting deployments, project metadata, and serverless runtime metrics.
