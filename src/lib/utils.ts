/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateMetadata<T>(component: React.FC<T>): Record<string, unknown> {
  const defaultProps: any = component.defaultProps || {};
  const propTypes = Object.keys(defaultProps);

  return propTypes.reduce((acc, prop) => {
    acc[prop] = {
      default: defaultProps[prop],
      type: typeof defaultProps[prop],
    };
    return acc;
  }, {} as Record<string, unknown>);
}