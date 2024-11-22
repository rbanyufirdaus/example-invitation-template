// import * as fs from 'fs';
// import * as path from 'path';
// import { parse, ComponentDoc } from 'react-docgen-typescript';

// /**
//  * Generates metadata for React components and attaches it as a static property.
//  * 
//  * @param componentsDir - The directory containing React components.
//  * @param outputDir - The directory to save the processed components with metadata.
//  */
// export function generateMetadata(componentsDir: string, outputDir: string): void {
export function generateMetadata(): void {
//   // Ensure the output directory exists
//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir, { recursive: true });
//   }

//   // Get all .tsx files from the components directory
//   const files = fs.readdirSync(componentsDir).filter((file) => file.endsWith('.tsx'));

//   files.forEach((file) => {
//     const filePath = path.join(componentsDir, file);
//     const source = fs.readFileSync(filePath, 'utf8');

//     try {
//       // Parse metadata using react-docgen-typescript
//       const [doc]: ComponentDoc[] = parse(filePath, { savePropValueAsString: true });

//       // Generate the new component file with metadata attached
//       const componentWithMetadata = `
//         import Component from '${path.relative(outputDir, filePath).replace(/\\/g, '/')}';

//         Component.metadata = ${JSON.stringify(doc, null, 2)};

//         export default Component;
//       `;

//       const outputFilePath = path.join(outputDir, file);
//       fs.writeFileSync(outputFilePath, componentWithMetadata);
//       console.log(`Processed: ${file}`);
//     } catch (error) {
//       console.error(`Error processing ${file}:`, (error as Error).message);
//     }
//   });

//   console.log('Metadata generation completed.');
}
