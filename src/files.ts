import fs from 'fs';

export const getFiles = () => {
  const dirs = fs.readdirSync(__dirname);

  // Get all directories
  const directories = dirs.filter((dir) =>
    fs.statSync(`${__dirname}/${dir}`).isDirectory()
  );

  // Return only dirs that have index.tsx inside
  const result = directories
    .filter((dir) => fs.existsSync(`${__dirname}/${dir}/index.tsx`))
    .map((dir) => `${dir}/index.tsx`);

  console.log('⚒️ Building files:', result);
  return result;
};
