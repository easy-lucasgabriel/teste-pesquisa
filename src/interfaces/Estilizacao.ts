
export interface RangeProps {
    min: number;
    max: number;
    value: number;
    step: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}