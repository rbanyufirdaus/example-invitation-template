import { JSX as JSX_2 } from 'react';

declare type FileUpload = string;

export declare const HeroSection: ({ title, date, imageUrl }: HeroSectionProps) => JSX_2.Element;

export declare interface HeroSectionProps {
    title?: string;
    date?: Date;
    imageUrl?: FileUpload;
}

export { }
