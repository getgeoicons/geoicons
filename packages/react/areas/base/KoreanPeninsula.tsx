// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KoreanPeninsula = ({
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
      <path strokeLinejoin="round" d="m9.323 21.948.19.213a1 1 0 0 0 1.292.17l1.655-1.082a1 1 0 0 1 .342-.141l1.841-.386a1 1 0 0 0 .655-.467l.26-.436c.092-.156.14-.335.14-.516l-.01-2.534q-.002-.158-.05-.308l-.47-1.43a1 1 0 0 0-.084-.188l-1.44-2.495a1 1 0 0 0-.253-.29l-1.106-.86a1 1 0 0 1-.386-.749l-.021-.54a1 1 0 0 1 .495-.905l3.181-1.856a1 1 0 0 0 .496-.885l-.015-.725a1 1 0 0 1 .308-.745l1.153-1.101a.6.6 0 0 0 .085-.767l-.792-1.186a.4.4 0 0 0-.175-.15.703.703 0 0 0-.987.533l-.073.475a1 1 0 0 1-.678.8l-1.734.566a.25.25 0 0 0-.159.32l.272.783a.613.613 0 0 1-.7.802l-.443-.09a1 1 0 0 1-.557-.324l-.444-.512a.6.6 0 0 0-.584-.193l-.134.03a.6.6 0 0 0-.41.325L9.396 6.32a1 1 0 0 1-.468.466L6.73 7.84a1 1 0 0 0-.568.875l-.003.103a1 1 0 0 0 .588.938l.366.166a1 1 0 0 1 .46 1.401l-.689 1.225a1 1 0 0 0 .218 1.247l.155.134a1 1 0 0 0 .764.237l.992-.11a1 1 0 0 1 1.07.712l.055.19a1 1 0 0 1-.412 1.118l-.266.174a.6.6 0 0 0-.225.733l.643 1.545a1 1 0 0 1-.014.802l-.705 1.533a1 1 0 0 0 .165 1.085Z"/>
    </svg>
  );
};
