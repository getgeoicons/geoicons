// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Zm = ({
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
      <path strokeLinejoin="round" d="M4.484 11.675H1.2v5.916a.5.5 0 0 0 .134.34l2.256 2.43a.5.5 0 0 0 .442.154l1.964-.302a.5.5 0 0 1 .203.01l3.886 1.02a.5.5 0 0 0 .51-.164l3.053-3.655a.5.5 0 0 1 .295-.172l2.804-.507-.341-1.312 5.572-1.815-.59-.69a.5.5 0 0 1-.035-.605l1.163-1.725a.5.5 0 0 0 .084-.25l.19-3.121a.5.5 0 0 0-.073-.293l-1.164-1.887a.5.5 0 0 0-.2-.184L17.159 2.75a.5.5 0 0 0-.301-.048l-2.289.352a.5.5 0 0 0-.412.385l-1.123 5.04a.5.5 0 0 0 .096.42l.916 1.15a.5.5 0 0 0 .479.181l.726-.13a.5.5 0 0 1 .587.493v1.546a.5.5 0 0 1-.5.5h-.883a.5.5 0 0 1-.373-.167l-2.916-3.257a.5.5 0 0 0-.652-.081l-.726.49a.5.5 0 0 1-.49.04L4.985 7.676v3.499a.5.5 0 0 1-.5.5Z"/>
    </svg>
  );
};
