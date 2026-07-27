import fs from 'node:fs';
import path from 'node:path';

// Banned words list for profanity, vulgarity, and unwanted placeholder text
const BANNED_TERMS = [
  // Common placeholders that shouldn't leak to production
  'lorem ipsum',
  'todo: remove',
  'test article - do not publish',
  // Common profanity / vulgarities (case-insensitive search)
  'fuck',
  'shit',
  'bitch',
  'asshole',
  'cunt',
  'bastard',
  'dickhead',
  'motherfucker',
  'slut',
  'whore'
];

function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.github') {
        getAllMarkdownFiles(fullPath, arrayOfFiles);
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

function validateContent() {
  console.log('🔍 Running content sanity and safety checks...');
  const files = getAllMarkdownFiles(process.cwd());
  let errors = [];

  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file);
    const content = fs.readFileSync(file, 'utf-8');
    const lowerContent = content.toLowerCase();

    // 1. Check for banned / vulgar / placeholder terms
    for (const term of BANNED_TERMS) {
      if (lowerContent.includes(term.toLowerCase())) {
        errors.push(`[Profanity/Placeholder] Found forbidden term "${term}" in ${relativePath}`);
      }
    }

    // 2. Frontmatter sanity check for article files
    if (relativePath.startsWith('articles/')) {
      if (!content.startsWith('---')) {
        errors.push(`[Frontmatter Error] Missing frontmatter block in ${relativePath}`);
      } else {
        const frontmatterEnd = content.indexOf('---', 3);
        if (frontmatterEnd === -1) {
          errors.push(`[Frontmatter Error] Unclosed frontmatter block in ${relativePath}`);
        } else {
          const frontmatterText = content.slice(3, frontmatterEnd);
          if (!frontmatterText.includes('title:')) {
            errors.push(`[Frontmatter Error] Missing 'title' field in ${relativePath}`);
          }
          if (!frontmatterText.includes('description:')) {
            errors.push(`[Frontmatter Error] Missing 'description' field in ${relativePath}`);
          }
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error('\n❌ Content Sanity Checks Failed:');
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log(`✅ Sanity check passed! Checked ${files.length} markdown file(s) with 0 errors.`);
}

validateContent();
