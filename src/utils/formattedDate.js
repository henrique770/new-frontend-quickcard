import { format } from 'date-fns';

export default function FormattedDate(value) {
  const date = new Date(value);
  const result = format(date, 'dd/MM/yyyy');
  return result;
}
