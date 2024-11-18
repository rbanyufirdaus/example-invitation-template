import * as React from "react"
import { generateMetadata } from "./lib/utils";
import { HeroSection } from "./sections/hero";
import { GreetingSection } from "./sections/greeting";
import { CountdownSection } from "./sections/countdown";

export interface MinimalLeafyPurpleTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
}

export const MinimalLeafyPurpleTemplate = ({children}: MinimalLeafyPurpleTemplateProps) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

MinimalLeafyPurpleTemplate.metadata = {
    name: MinimalLeafyPurpleTemplate.toString(),
    props: generateMetadata(MinimalLeafyPurpleTemplate),
    sections: {
        'hero-section': HeroSection,
        'greeting-section': GreetingSection,
        'countdown-section': CountdownSection,
    }
}

export const MinimalLeafyPurpleTemplateMetadata = generateMetadata(MinimalLeafyPurpleTemplate);