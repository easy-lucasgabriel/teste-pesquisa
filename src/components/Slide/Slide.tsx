import { useState } from 'react';

interface Transaction {
    id: number;
    name: string;
    value: number;
    date: Date;
}

interface CarouselProps {
    items: Transaction | any;
}

export function Slide({ items } : CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % items.length);
    }

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide + items.length - 1) % items.length);
    }

    const slideWidth = 100 / items.length;

    return (
        <div style={{ width: '100%', display: 'flex', overflow: 'hidden' }}>
            <div
                style={{
                    width: `${slideWidth * items.length}%`,
                    display: 'flex',
                    transform: `translateX(-${currentSlide * slideWidth}%)`,
                    transition: 'transform 0.3s ease-in-out'
                }}></div>
                <button onClick={handlePrevSlide}>{'<'}</button>
                <button onClick={handleNextSlide}>{'>'}</button>
        </div>
    )
}