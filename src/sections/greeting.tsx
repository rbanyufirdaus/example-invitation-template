import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

// import { generateMetadata } from "@/lib/utils";
export interface GreetingSectionProps {
    title?: string;
    brideName?: string;
    groomName?: string;
    test?: TextElement;
    test2?: TextElement;
    test3?: TextElement;
    test4?: TextElement;
}

export interface TextElement {
    value: string;
    fontFamily?: string;
    fontSize?: string;
    fontColor?: string;
    fontWeight?: number;
}

export const GreetingSection = ({title = 'We are Getting Married', brideName = 'Bride Name', groomName = 'Groom Name', test, test2, test3, test4}: GreetingSectionProps) => {    
    const { ref, inView } = useInView({triggerOnce: false, delay: 200})
    return (
        <section ref={ref} className="flex flex-col items-center w-full justify-center bg-secondary">
            <div className="w-0 h-0 border-l-[calc(100vw/2-15px)] border-r-[calc(100vw/2-15px)] border-l-transparent border-r-transparent border-t-[50px] border-t-white">

            </div>
            <div className="flex flex-col items-center gap-[3rem] xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl w-full py-12">
                <h2 className={cn("text-[2rem] text-center opacity-0", inView && "opacity-1 motion-preset-slide-up")}>{title}</h2>
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
            <p className={cn(test?.fontSize, test?.fontColor)} style={{ fontFamily: test?.fontFamily, fontWeight: test?.fontWeight }}>
                {test?.value}
            </p>
            <p className={cn(test2?.fontSize, test2?.fontColor)} style={{ fontFamily: test2?.fontFamily, fontWeight: test2?.fontWeight }}>
                {test2?.value}
            </p>
            <p className={cn(test3?.fontSize, test3?.fontColor)} style={{ fontFamily: test3?.fontFamily, fontWeight: test3?.fontWeight }}>
                {test3?.value}
            </p>
            <p className={cn(test4?.fontSize, test4?.fontColor)} style={{ fontFamily: test4?.fontFamily, fontWeight: test4?.fontWeight }}>
                {test4?.value}
            </p>
        </section>
    )
}

// GreetingSection.metadata = {
//     name: GreetingSection.toString(),
//     props: generateMetadata(GreetingSection)
// }

// export const GreetingSectionMetadata = generateMetadata(GreetingSection);