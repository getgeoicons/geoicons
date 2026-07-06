// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dj = ({
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
      <path strokeLinejoin="round" d="m5.566 22.779-2.7-.518a.5.5 0 0 1-.402-.559l.09-.662a.5.5 0 0 1 .193-.33l.723-.55a.5.5 0 0 0 .095-.7L2.8 18.454a.5.5 0 0 1-.095-.217l-.438-2.497a.5.5 0 0 1 .004-.196l.49-2.189a.5.5 0 0 1 .212-.308l1.572-1.04a.5.5 0 0 0 .139-.137l5.399-8.03a.5.5 0 0 1 .74-.1l1.888 1.622a.5.5 0 0 0 .586.048l1.23-.75a.5.5 0 0 0 .215-.272l.586-1.805a.5.5 0 0 1 .294-.311l2.393-.93a.5.5 0 0 1 .59.175l2.004 2.82a.5.5 0 0 1 .075.157l1.021 3.744a.5.5 0 0 1-.026.336l-.543 1.21a.5.5 0 0 1-.38.29l-1.692.26a.5.5 0 0 0-.31.176L17.7 11.792a.5.5 0 0 1-.277.17l-3.209.722a.5.5 0 0 0-.361.319l-.693 1.93a.25.25 0 0 0 .271.332l4.79-.693a.5.5 0 0 1 .468.19l1.066 1.38a.5.5 0 0 1 .03.568l-3.103 5.03a.5.5 0 0 1-.355.233l-1.315.188a.5.5 0 0 1-.481-.21l-.625-.903a.5.5 0 0 0-.534-.2l-7.588 1.925a.5.5 0 0 1-.217.006Z"/>
    </svg>
  );
};
