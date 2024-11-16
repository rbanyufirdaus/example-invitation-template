import { generateMetadata } from "@/lib/utils";

export interface GreetingSectionProps {
    title?: string;
    brideName?: string;
    groomName?: string;
}

export const GreetingSection = ({title = 'We are Getting Married', brideName = 'Bride Name', groomName = 'Groom Name'}: GreetingSectionProps) => {    
    return (
        <section className="flex flex-col items-center w-full justify-center bg-secondary">
            <div className="w-0 h-0 border-l-[calc(100vw/2-15px)] border-r-[calc(100vw/2-15px)] border-l-transparent border-r-transparent border-t-[50px] border-t-white">

            </div>
            <div className="flex flex-col items-center gap-[3rem] xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl w-full py-12">
                <h2 className="text-[2rem] text-center">{title}</h2>
                <div className="flex w-full text-primary-foreground">
                    <h4 className="flex-1 text-center">
                        {brideName}
                    </h4>
                    <div className="text-[9rem] font-semibold leading-none text-black">&</div>
                    <h4 className="flex-1 text-center">
                        {groomName}
                    </h4>
                </div>
            </div>
        </section>
    )
}

export const GreetingSectionMetadata = generateMetadata(GreetingSection);