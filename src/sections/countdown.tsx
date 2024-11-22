import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import moment from 'moment';
// import { generateMetadata } from "@/lib/utils";

const calculateDuration = (eventTime: number) =>
    moment.duration(
      Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
      "seconds"
    );

export interface CountdownSectionProps {
    date?: Date;
}

export const CountdownSection = ({date = new Date('12/31/2024')}: CountdownSectionProps) => {    
    const formattedDate = useMemo(() => {
        const year = date.toLocaleString('default', { year: 'numeric' });
		const month = date.toLocaleString('default', { month: 'long' });
		const day = date.toLocaleString('default', { day: '2-digit' });
        return (
            <h2>{month} {day}<sup>th</sup>, {year}</h2>
        )
    }, [date])

    const eventTime = useMemo(() => {
        return moment(date).startOf("day").unix();
      }, []);

    const [duration, setDuration] = useState(calculateDuration(eventTime));
    const timerRef = useRef<NodeJS.Timeout>();
    const timerCallback = useCallback(() => {
        setDuration(calculateDuration(eventTime));
    }, [eventTime]);

    useEffect(() => {
        timerRef.current = setInterval(timerCallback, 1000);

        return () => {
        clearInterval(timerRef.current);
        };
    }, [eventTime]);

    return (
        <section className="flex items-center w-full justify-center bg-primary">
            <div className="flex flex-col items-center gap-[3rem] xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl w-full py-24 text-white">
                {formattedDate}
                <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl">{Math.floor(duration.asDays()).toString().padStart(2, "0")}</div>
                        <p className="text-lg">Days</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl">{duration.hours().toString().padStart(2, "0")}</div>
                        <p className="text-lg">Hours</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl">{duration.minutes().toString().padStart(2, "0")}</div>
                        <p className="text-lg">Minutes</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-5xl">{duration.seconds().toString().padStart(2, "0")}</div>
                        <p className="text-lg">Seconds</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// CountdownSection.metadata = {
//     name: CountdownSection.toString(),
//     props: generateMetadata(CountdownSection)
// }

// export const CountdownSectionMetadata = generateMetadata(CountdownSection);