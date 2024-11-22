import { parse, ComponentDoc } from "react-docgen-typescript";

export function attachMetadataToComponent<T>(
  Component: React.ComponentType<T>,
  componentPath: string
): void {
  const componentDocs: ComponentDoc[] = parse(componentPath, { savePropValueAsString: true });

  if (componentDocs.length === 0) {
    console.warn(`No metadata found for component at: ${componentPath}`);
    return;
  }

  // Attach metadata to the component
  (Component as any).metadata = componentDocs[0]; // Attach metadata as a custom property
}
