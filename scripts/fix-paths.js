const fs = require('fs');
const path = require('path');

/**
 * Post-build script to convert absolute paths to relative paths
 * This fixes Next.js static export for CDN subdirectory deployment
 */

const OUT_DIR = path.join(__dirname, '..', 'out');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Fix: "/_next/ -> "./_next/
  if (content.includes('"/_next/')) {
    content = content.replace(/"\/(_next\/)/g, '"./$1');
    modified = true;
  }

  // Fix: '/_next/ -> './_next/
  if (content.includes("'/_next/")) {
    content = content.replace(/'\/(_next\/)/g, "'.$1");
    modified = true;
  }

  // Fix: src="/ -> src="./
  if (content.includes('src="/"') || content.includes("src='/")) {
    content = content.replace(/src=(["'])\/(?!\/|http)/g, 'src=$1./');
    modified = true;
  }

  // Fix: href="/ -> href="./
  if (content.includes('href="/"') || content.includes("href='/")) {
    content = content.replace(/href=(["'])\/(?!\/|http)/g, 'href=$1./');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`   ✅ Fixed: ${path.relative(OUT_DIR, filePath)}`);
    return true;
  }

  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
      if (fixPathsInFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

console.log('🔧 Fixing absolute paths to relative paths...');
console.log(`📂 Processing: ${OUT_DIR}`);

if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ Error: out directory not found. Run build first.');
  process.exit(1);
}

const fixedCount = processDirectory(OUT_DIR);

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log('🎉 All paths are now relative!');