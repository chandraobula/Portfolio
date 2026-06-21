const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src/components/sections');
const files = fs.readdirSync(sectionsDir).map(f => path.join(sectionsDir, f));

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');

  // Regex to replace fontSize: XX
  content = content.replace(/fontSize: (\d+)/g, (match, sizeStr) => {
    let size = parseInt(sizeStr);
    
    // logic:
    // 9, 10, 11 -> 14
    // 12, 13, 14 -> 16
    // 15, 16 -> 18
    // 18 -> 20
    // don't touch headings 20+ except 22 -> 24
    if (size >= 9 && size <= 11) size = 14;
    else if (size >= 12 && size <= 14) size = 16;
    else if (size >= 15 && size <= 16) size = 18;
    else if (size === 18) size = 20;
    else if (size === 22) size = 24;

    return `fontSize: ${size}`;
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated fonts in ${path.basename(file)}`);
});
