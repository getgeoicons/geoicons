// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bn = ({
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
      <path strokeLinejoin="round" d="M4.545 13.093 1.2 11.073l6.293-1.946a.5.5 0 0 0 .148-.074l5.412-3.96a.5.5 0 0 1 .134-.069l4.388-1.491-2.003 3.643a.5.5 0 0 1-.259.226l-2.862 1.101a.5.5 0 0 0-.317.527l.492 4.089a.5.5 0 0 0 .374.425l.737.185a.5.5 0 0 1 .335.687l-2.178 4.936a.5.5 0 0 1-.249.253l-1.468.674a.5.5 0 0 1-.64-.202l-2.183-3.719a.5.5 0 0 0-.493-.243l-1.272.16a.5.5 0 0 1-.56-.445l-.245-2.36a.5.5 0 0 0-.239-.377Zm17.026 2.855-3.214-1.164a.5.5 0 0 1-.325-.396l-.819-5.493a.5.5 0 0 1 .12-.405l1.57-1.782a.5.5 0 0 1 .837.138l1.472 3.528a.5.5 0 0 1 .035.246l-.25 2.306a.5.5 0 0 0 .143.407l1.336 1.336a.5.5 0 0 1 .03.675l-.381.455a.5.5 0 0 1-.554.149Z"/>
    </svg>
  );
};
