// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoHatoMayor = ({
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
      <path strokeLinejoin="round" d="M18.446 5.544a1 1 0 0 0-.768-.894l-5.245-1.237a1 1 0 0 1-.76-.832l-.054-.373a1 1 0 0 0-.315-.598l-.14-.127a1 1 0 0 0-.652-.262l-.327-.007a1 1 0 0 0-.934.59l-.058.13a1 1 0 0 1-1 .585l-3.448-.306a1 1 0 0 0-1.06.763l-.553 2.296a.3.3 0 0 0 .167.343l3.747 1.714 4.046 2.084a.6.6 0 0 1 .101 1l-1.658 1.333a1 1 0 0 0-.364.915l.545 3.98c.067.487.223.958.46 1.388l2.23 4.047a.6.6 0 0 0 .964.12l1.207-1.293a1 1 0 0 0 .27-.7l-.012-.635a1 1 0 0 1 .472-.867l1.4-.87a1 1 0 0 0 .44-.6l.681-2.637a1 1 0 0 0-.222-.916L13.87 9.486a.8.8 0 0 1-.186-.696l.148-.71a1 1 0 0 1 1.285-.747l4.582 1.475a.8.8 0 0 0 .992-.476l.006-.015a.8.8 0 0 0-.31-.955l-1.483-.969a1 1 0 0 1-.45-.758z"/>
    </svg>
  );
};
