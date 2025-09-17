import type { SVGProps } from "react";

export const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M12 2l7 3v5c0 5-3.4 9.4-7 10-3.6-.6-7-5-7-10V5l7-3z" />
  </svg>
);

export const Timer = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M9 2h6v2H9V2zm3 4a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14 7 7 0 010-14zm1 3h-2v5h5v-2h-3V11z" />
  </svg>
);

export const Key = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M21 2l-9.1 9.1a5 5 0 10-1.4 1.4L13 17h3v3h3v-3h2v-4.18l3-3V2h-3zM7 13a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

export const Users = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M16 11a4 4 0 100-8 4 4 0 000 8zm-8 0a4 4 0 100-8 4 4 0 000 8zm0 2c-3.3 0-6 2.24-6 5v2h7.5a6.5 6.5 0 016.5-6.5 6.5 6.5 0 016.5 6.5H24v-2c0-2.76-2.7-5-6-5-.65 0-1.27.11-1.84.32A6 6 0 0016 13c-2.21 0-4.15 1.2-5.17 3H0v-2c0-2.76 2.7-5 6-5 .65 0 1.27.11 1.84.32A6 6 0 008 13z" />
  </svg>
);

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M20.29 6.3l-11 11-5-5 1.42-1.42L9.29 14.5l9.59-9.6 1.41 1.4z" />
  </svg>
);
