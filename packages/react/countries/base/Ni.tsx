// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ni = ({
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
      <path strokeLinejoin="round" d="m3.974 11.739-1.67.14a.5.5 0 0 0-.303.86l7.717 7.383a.5.5 0 0 0 .298.137l5.326.513a.5.5 0 0 1 .19.059l3.149 1.71a.5.5 0 0 0 .412.03l.732-.271a.5.5 0 0 0 .317-.562l-.87-4.642a.5.5 0 0 1 .098-.401l1.544-1.97a.5.5 0 0 0 .104-.353l-.43-4.856a.5.5 0 0 1 .032-.227l1.646-4.174a.5.5 0 0 0 .03-.116l.392-2.833a.5.5 0 0 0-.663-.54l-5.368 1.905a.5.5 0 0 1-.38-.019l-1.471-.693a.5.5 0 0 0-.573.105L10.28 7.011a.5.5 0 0 1-.667.046l-.61-.477a.5.5 0 0 0-.5-.068L5.676 7.68a.5.5 0 0 0-.29.323l-.973 3.376a.5.5 0 0 1-.438.36Z"/>
    </svg>
  );
};
