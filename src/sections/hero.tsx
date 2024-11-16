import HeroImage from '@/assets/images/hero.png'
import { useMemo } from 'react';

type FileUpload = string

export interface HeroSectionProps {
    title: string;
    date: Date;
    imageUrl?: FileUpload;
}

export const HeroSection = ({title = 'Kapan Kapan', date = new Date('12/31/2024'), imageUrl}: HeroSectionProps) => {
    const formattedDate = useMemo(() => {
        const year = date.toLocaleString('default', { year: 'numeric' });
		const month = date.toLocaleString('default', { month: '2-digit' });
		const day = date.toLocaleString('default', { day: '2-digit' });
        return `${day} . ${month} . ${year}`
    }, [date])

    return (
        <section className="h-[660px] max-h-[100svh] flex items-center w-full justify-center relative">
            <div className="absolute top-0 z-0">
                <img src={imageUrl && imageUrl.trim().length > 0 ? imageUrl : HeroImage} alt="Hero Image" />
            </div>
            <div className="flex flex-col gap-2 justify-center text-center w-full text-primary-foreground z-10">
                <h1 className="font-bold text-[4rem]">{title}</h1>
                <h5 className="font-bold text-[1.25rem] tracking-[4px]">{formattedDate}</h5>
            </div>
        </section>
    )
}