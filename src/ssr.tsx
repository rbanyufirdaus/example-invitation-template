import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";
import { renderToString } from "react-dom/server";
import { extractCritical } from "@emotion/server";

const cache: EmotionCache = createCache({ key: "css", prepend: true });

/**
 * Renders a React component and extracts critical CSS.
 * 
 * @param Component - The React component to render.
 * @param props - The props to pass to the component.
 * @returns An object containing the rendered HTML, extracted CSS, and Emotion style IDs.
 */
export function renderWithStyles<T extends object>(
  Component: React.ComponentType<T>,
  props: T = {} as T
): { html: string; css: string; ids: string[] } {
  const html = renderToString(
    <CacheProvider value={cache}>
      <Component {...props} />
    </CacheProvider>
  );

  const { css, ids } = extractCritical(html);

  return { html, css, ids };
}

/**
 * Retrieves the raw CSS from Emotion's cache.
 * 
 * @returns A string containing all CSS collected during the rendering process.
 */
export function getCssText(): string {
  return cache.sheet.tags.map((tag) => tag.textContent || "").join("");
}
