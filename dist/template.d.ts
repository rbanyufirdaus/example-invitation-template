import * as React_2 from 'react';

declare interface CountdownSectionProps {
    date?: Date;
}

declare type FileUpload = string;

declare interface GreetingSectionProps {
    title?: string;
    brideName?: string;
    groomName?: string;
}

declare interface HeroSectionProps {
    title?: string;
    date?: Date;
    imageUrl?: FileUpload;
}

export declare const MinimalLeafyPurpleTemplate: {
    ({ children }: MinimalLeafyPurpleTemplateProps): React_2.JSX.Element;
    metadata: {
        name: string;
        sections: {
            'hero-section': ({ title, date, imageUrl }: HeroSectionProps) => React_2.JSX.Element;
            'greeting-section': ({ title, brideName, groomName }: GreetingSectionProps) => React_2.JSX.Element;
            'countdown-section': ({ date }: CountdownSectionProps) => React_2.JSX.Element;
        };
    };
};

export declare interface MinimalLeafyPurpleTemplateProps extends React_2.HTMLAttributes<HTMLDivElement> {
    id?: string;
}

export { }
