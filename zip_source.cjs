const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('public/source-code.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

output.on('end', function() {
  console.log('Data has been drained');
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.glob('**/*', {
  cwd: __dirname,
  ignore: ['node_modules/**', 'dist/**', '.git/**', '.astro/**', 'public/source-code.zip', 'zip_source.cjs']
});

// also include hidden files (glob by default ignores them)
archive.glob('.*', {
  cwd: __dirname,
  ignore: ['node_modules/**', 'dist/**', '.git/**', '.astro/**']
});

archive.finalize();
