import os
import zipfile

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if 'dist' in dirs:
            dirs.remove('dist')
        if 'dist-server' in dirs:
            dirs.remove('dist-server')
        if '.git' in dirs:
            dirs.remove('.git')
        if '.astro' in dirs:
            dirs.remove('.astro')
            
        for file in files:
            file_path = os.path.join(root, file)
            # Exclude the zip file itself
            if file_path == './public/source-code.zip':
                continue
            ziph.write(file_path)

if __name__ == '__main__':
    # Make sure public directory exists
    os.makedirs('public', exist_ok=True)
    zipf = zipfile.ZipFile('public/source-code.zip', 'w', zipfile.ZIP_DEFLATED)
    zipdir('.', zipf)
    zipf.close()
    print("Zip created successfully at public/source-code.zip")
