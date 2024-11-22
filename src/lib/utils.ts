/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import PropTypes, { WeakValidationMap } from 'prop-types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function generateMetadata<T>(component: React.FC<T>): Record<string, unknown> {
//   const defaultProps: any = component.defaultProps || {};
//   const propTypes = Object.keys(defaultProps);
//   console.log(component.propTypes)

//   return propTypes.reduce((acc, prop) => {
//     acc[prop] = {
//       default: defaultProps[prop],
//       type: typeof defaultProps[prop],
//     };
//     return acc;
//   }, {} as Record<string, unknown>);
// }

// export function generateMetadataFromPropTypes<T>(component: React.FC<T>): Record<string, unknown> {
//   const propTypes: WeakValidationMap<T> = component.propTypes || {};
//   const defaultProps: any = component.defaultProps || {};

//   console.log(propTypes)

//   const metadata: Record<string, unknown> = {};
//   for (const [propName, propType] of Object.entries(propTypes)) {
//     metadata[propName] = {
//       type: propType,
//       default: defaultProps[propName] || null,
//     };
//   }
//   return metadata;
// }