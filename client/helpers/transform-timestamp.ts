import { format } from 'date-fns';

export function transformTimestamp(timestamp: string | number | Date): string {
    console.log(timestamp)
    const date = new Date(Number(timestamp));
    console.log(date)
    return format(date, 'dd/MM/yyyy');
}
