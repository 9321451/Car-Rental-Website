declare module 'splitting' {
  export default function Splitting(options?: {
    target?: Element | null;
    by?: 'words' | 'lines' | 'chars';
  }): void;
}