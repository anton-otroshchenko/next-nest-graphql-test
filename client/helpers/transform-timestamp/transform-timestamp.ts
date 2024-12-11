import { format } from 'date-fns';

export function transformTimestamp(timestamp: string | number | Date): string {
    const date = new Date(Number(timestamp));
    return format(date, 'dd/MM/yyyy');
}
