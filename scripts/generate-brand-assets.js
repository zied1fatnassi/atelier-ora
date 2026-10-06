const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Load vector paths extracted and smoothed from reference
const paths = JSON.parse(fs.readFileSync(path.join(__dirname, 'aura-paths.json'), 'utf8'));

// 1. PRIMARY LOGO (DARK BACKGROUND / TRANSPARENT CANVAS)
// Aura in radiant Solar Amber Gold + PROD in crisp pure optic white with golden aperture accent
const primaryDarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 440" width="820" height="440" fill="none">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24" />
      <stop offset="42%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#ECECF2" />
    </linearGradient>
  </defs>

  <!-- Aura Signature Mark in Solar Amber -->
  <g fill="url(#goldGrad)" fill-rule="evenodd" transform="translate(10, 12)">
    ${paths.map(p => `<path d="${p}" />`).join('\n    ')}
  </g>

  <!-- High-Contrast PROD Capsule in the gallery above 'ura' -->
  <g transform="translate(372, 54)">
    <rect x="0" y="0" width="224" height="72" rx="14" fill="#0C0C14" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5" />
    <rect x="2" y="2" width="220" height="68" rx="12" fill="rgba(245, 158, 11, 0.05)" />
    
    <!-- Camera/Cinema REC Accent Point -->
    <circle cx="28" cy="36" r="5" fill="#F59E0B" />
    <circle cx="28" cy="36" r="8" stroke="#F59E0B" stroke-width="1.5" opacity="0.4" />

    <!-- Pure White Geometric PROD with wide tracking -->
    <text x="50" y="47" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="33" font-weight="800" letter-spacing="0.22em" fill="url(#whiteGrad)">PROD</text>
  </g>
</svg>
`;

// 2. PRIMARY LOGO (LIGHT BACKGROUND / TRANSPARENT CANVAS)
// For light surfaces: Aura in deep warm bronze + PROD in deep obsidian graphite
const primaryLightSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 440" width="820" height="440" fill="none">
  <defs>
    <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="50%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#853207" />
    </linearGradient>
  </defs>

  <!-- Aura Signature Mark in Deep Amber Bronze -->
  <g fill="url(#bronzeGrad)" fill-rule="evenodd" transform="translate(10, 12)">
    ${paths.map(p => `<path d="${p}" />`).join('\n    ')}
  </g>

  <!-- Deep Obsidian PROD Capsule -->
  <g transform="translate(372, 54)">
    <rect x="0" y="0" width="224" height="72" rx="14" fill="#F4F4F7" stroke="#E2E2E9" stroke-width="1.5" />
    <circle cx="28" cy="36" r="5" fill="#D97706" />
    <text x="50" y="47" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="33" font-weight="800" letter-spacing="0.22em" fill="#0A0A0E">PROD</text>
  </g>
</svg>
`;

// 3. HORIZONTAL LOGO (DARK BACKGROUND)
// Perfect for headers, banners, widescreen branding
const horizontalDarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="540" height="120" fill="none">
  <defs>
    <linearGradient id="goldH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24" />
      <stop offset="42%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>

  <!-- Scaled Aura Mark -->
  <g fill="url(#goldH)" fill-rule="evenodd" transform="translate(14, 14) scale(0.24)">
    ${paths.map(p => `<path d="${p}" />`).join('\n    ')}
  </g>

  <!-- Vertical Hairline Divider -->
  <line x1="220" y1="28" x2="220" y2="92" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5" stroke-linecap="round" />

  <!-- PROD + Studio Subtitle -->
  <g transform="translate(240, 36)">
    <text x="0" y="34" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="36" font-weight="900" letter-spacing="0.16em" fill="#FFFFFF">PROD</text>
    <text x="2" y="56" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="600" letter-spacing="0.28em" fill="#A0A0AB">CREATIVE AGENCY</text>
  </g>
</svg>
`;

// 4. HORIZONTAL LOGO (LIGHT BACKGROUND)
const horizontalLightSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="540" height="120" fill="none">
  <defs>
    <linearGradient id="bronzeH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="50%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#853207" />
    </linearGradient>
  </defs>

  <g fill="url(#bronzeH)" fill-rule="evenodd" transform="translate(14, 14) scale(0.24)">
    ${paths.map(p => `<path d="${p}" />`).join('\n    ')}
  </g>

  <line x1="220" y1="28" x2="220" y2="92" stroke="#D4D4DC" stroke-width="1.5" stroke-linecap="round" />

  <g transform="translate(240, 36)">
    <text x="0" y="34" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="36" font-weight="900" letter-spacing="0.16em" fill="#0A0A0E">PROD</text>
    <text x="2" y="56" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="600" letter-spacing="0.28em" fill="#60606C">CREATIVE AGENCY</text>
  </g>
</svg>
`;

// 5. COMPACT LOGO (DARK BACKGROUND - MOBILE HEADER)
const compactDarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="280" height="80" fill="none">
  <defs>
    <linearGradient id="goldC" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24" />
      <stop offset="42%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>

  <!-- Soaring 'A' Icon -->
  <g fill="url(#goldC)" fill-rule="evenodd" transform="translate(10, 8) scale(0.16)">
    <path d="${paths[0]}" />
  </g>

  <!-- AURA PROD Text Lockup -->
  <g transform="translate(70, 20)">
    <text x="0" y="28" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" letter-spacing="0.08em" fill="#F59E0B">AURA</text>
    <text x="76" y="28" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" letter-spacing="0.12em" fill="#FFFFFF">PROD</text>
    <text x="1" y="44" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" letter-spacing="0.22em" fill="#80808C">DIGITAL STUDIO</text>
  </g>
</svg>
`;

// 6. SYMBOL / APP ICON (512x512)
const scale = 0.82;
const tx = 256 - (8.8 + 305.5/2) * scale;
const ty = 256 - (8.2 + 406.8/2) * scale;

const symbolSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
  <defs>
    <linearGradient id="iconGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24" />
      <stop offset="42%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="tileBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#14141E" />
      <stop offset="100%" stop-color="#08080C" />
    </linearGradient>
    <radialGradient id="symbolGlow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="rgba(245, 158, 11, 0.22)" />
      <stop offset="100%" stop-color="rgba(245, 158, 11, 0)" />
    </radialGradient>
  </defs>

  <!-- Squircle Base Tile -->
  <rect width="512" height="512" rx="112" fill="url(#tileBg)" />
  <rect width="512" height="512" rx="112" fill="url(#symbolGlow)" />
  <rect x="3" y="3" width="506" height="506" rx="109" stroke="rgba(255, 255, 255, 0.14)" stroke-width="4" />

  <!-- Soaring 'A' Icon Mark -->
  <g fill="url(#iconGold)" fill-rule="evenodd" transform="translate(${tx.toFixed(1)}, ${ty.toFixed(1)}) scale(${scale})">
    <path d="${paths[0]}" />
  </g>
</svg>
`;

// Helper: Create a single multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // 0-1: Reserved (0)
  // 2-3: Type (1 for ICO)
  // 4-5: Count
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function buildAll() {
  const brandDir = path.join(__dirname, '../public/brand');
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../src/app');

  if (!fs.existsSync(brandDir)) fs.mkdirSync(brandDir, { recursive: true });

  console.log('1. Writing vector SVG source files...');
  fs.writeFileSync(path.join(brandDir, 'aura-prod-primary.svg'), primaryDarkSvg.trim());
  fs.writeFileSync(path.join(brandDir, 'aura-prod-primary-light.svg'), primaryLightSvg.trim());
  fs.writeFileSync(path.join(brandDir, 'aura-prod-horizontal.svg'), horizontalDarkSvg.trim());
  fs.writeFileSync(path.join(brandDir, 'aura-prod-horizontal-light.svg'), horizontalLightSvg.trim());
  fs.writeFileSync(path.join(brandDir, 'aura-prod-compact.svg'), compactDarkSvg.trim());
  fs.writeFileSync(path.join(brandDir, 'aura-prod-symbol.svg'), symbolSvg.trim());
  
  // Public icon.svg for browser tab
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), symbolSvg.trim());
  fs.writeFileSync(path.join(appDir, 'icon.svg'), symbolSvg.trim());

  console.log('2. Generating high-resolution raster assets with sharp...');
  
  // Primary Logo (for dark background)
  await sharp(Buffer.from(primaryDarkSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'aura-prod-logo.png'));
  
  await sharp(Buffer.from(primaryDarkSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'aura-prod-logo-light.png'));

  // Primary Dark Logo (for light backgrounds)
  await sharp(Buffer.from(primaryLightSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'aura-prod-logo-dark.png'));

  // Horizontal Logos
  await sharp(Buffer.from(horizontalDarkSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'aura-prod-horizontal.png'));

  await sharp(Buffer.from(horizontalLightSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'aura-prod-horizontal-dark.png'));

  // Compact Logo
  await sharp(Buffer.from(compactDarkSvg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(brandDir, 'aura-prod-compact.png'));

  // Icons at standard dimensions
  const icon32Buf = await sharp(Buffer.from(symbolSvg)).resize(32, 32).png().toBuffer();
  const icon16Buf = await sharp(Buffer.from(symbolSvg)).resize(16, 16).png().toBuffer();
  const icon48Buf = await sharp(Buffer.from(symbolSvg)).resize(48, 48).png().toBuffer();
  const icon180Buf = await sharp(Buffer.from(symbolSvg)).resize(180, 180).png().toBuffer();
  const icon192Buf = await sharp(Buffer.from(symbolSvg)).resize(192, 192).png().toBuffer();
  const icon512Buf = await sharp(Buffer.from(symbolSvg)).resize(512, 512).png().toBuffer();
  const avatarBuf = await sharp(Buffer.from(symbolSvg)).resize(1024, 1024).png().toBuffer();

  fs.writeFileSync(path.join(brandDir, 'icon-32.png'), icon32Buf);
  fs.writeFileSync(path.join(brandDir, 'icon-192.png'), icon192Buf);
  fs.writeFileSync(path.join(brandDir, 'icon-512.png'), icon512Buf);
  fs.writeFileSync(path.join(brandDir, 'avatar.png'), avatarBuf);

  // Root public app icons
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), icon180Buf);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), icon180Buf);
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon512Buf);

  // Generate favicon.ico with 16, 32, 48
  const icoData = createIco([
    { width: 16, height: 16, buffer: icon16Buf },
    { width: 32, height: 32, buffer: icon32Buf },
    { width: 48, height: 48, buffer: icon48Buf },
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoData);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoData);

  console.log('✅ ALL Aura Prod brand assets generated successfully!');
}

buildAll().catch(console.error);
