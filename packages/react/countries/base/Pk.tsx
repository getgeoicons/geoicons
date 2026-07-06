// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pk = ({
  size = 24,
  strokeWidth = 1,
  'aria-label': ariaLabel,
  role,
  ...props
}: Props) => {
  const uid = useId();
  // Compliance nudge: warns once if icons render without a licensed <IconProvider>.
  // noteIconRender is a plain guarded fn (no client-only React API), so it does NOT
  // taint this as a Client Component — it no-ops on the server (window guard) and
  // only schedules a deferred client-side check. Do NOT wrap in useEffect (that would
  // force "use client" and break RSC/SSG consumers like the site).
  noteIconRender();
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      role={ariaLabel ? (role ?? 'img') : role}
      aria-labelledby={ariaLabel ? `${uid}-title` : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {ariaLabel && <title id={`${uid}-title`}>{ariaLabel}</title>}
      <path strokeLinejoin="round" d="m7.925 13.416-6.254.038 2.567 3.6a.5.5 0 0 1-.116.696l-1.237.887a.5.5 0 0 0-.197.3l-.181.824a.5.5 0 0 0 .546.604l5.128-.59a.5.5 0 0 1 .49.249l1.183 2.06a.5.5 0 0 0 .519.245l3.782-.655a.5.5 0 0 0 .326-.778l-1.965-2.828a.5.5 0 0 1-.011-.554l.693-1.086a.5.5 0 0 1 .406-.231l1.82-.055a.5.5 0 0 0 .392-.208l4.248-5.913a.5.5 0 0 0-.132-.71l-1.342-.88a.5.5 0 0 1-.226-.398l-.084-2.007a.5.5 0 0 1 .61-.508l1.484.333a.5.5 0 0 0 .316-.033l1.05-.476a.5.5 0 0 0 .182-.77l-2.219-2.74a.5.5 0 0 0-.46-.18l-2.99.438a.5.5 0 0 0-.2.076l-1.519.987.602 1.169a.5.5 0 0 1 .03.387l-.41 1.232a.5.5 0 0 1-.364.33l-1.13.256a.5.5 0 0 0-.372.358l-.728 2.721a.5.5 0 0 1-.29.332L8.77 11.24a.5.5 0 0 0-.306.444l-.041 1.249a.5.5 0 0 1-.497.483Z"/>
    </svg>
  );
};
