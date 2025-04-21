const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'slides');
const outputFile = path.join(__dirname, 'slides.json');

fs.readdir(slidesDir, (err, files) => {
  if (err) {
    process.exit(1);
  }
  const slides = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });
  fs.writeFile(outputFile, JSON.stringify(slides, null, 2), err => {
    if (err) {
      process.exit(1);
    }
    process.exit(0);
  });
});
