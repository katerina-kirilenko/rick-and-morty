export interface ItemListCardProps {
  path: string;
  number: RegExpMatchArray | string | null;
  color?: string;
  backgroundColor?: string;
  hover?: boolean;
  label: string;
}
