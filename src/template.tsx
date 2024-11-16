import * as React from "react"
import { generateMetadata } from "./lib/utils";

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

export const MinimalLeafyPurpleTemplateMetadata = generateMetadata(MinimalLeafyPurpleTemplate);