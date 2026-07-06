// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sj = ({
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
      <path strokeLinejoin="round" d="m1.428 8.324.55 1.645a.84.84 0 0 1-.275.92.84.84 0 0 0-.248.988l.813 1.88a1 1 0 0 0 .727.584l.356.069a1 1 0 0 1 .802.859l.387 3.137a1 1 0 0 0 .183.464l1.486 2.05a.783.783 0 0 0 1.414-.388l.217-2.353a1 1 0 0 1 .193-.505l.325-.437a1 1 0 0 0 .185-.441l.475-3.02a.707.707 0 0 1 1.363-.134l.669 1.825c.069.188.08.392.031.586l-.243.973a1 1 0 0 0 .582 1.164l.429.18a1 1 0 0 0 1.232-.384l.69-1.086a1 1 0 0 0 .02-1.04l-2.429-4.166a1 1 0 0 0-.197-.242L9.516 9.977a1 1 0 0 1-.175-.206l-.173-.27a.848.848 0 0 1 1.128-1.196l2.16 1.212a1 1 0 0 0 .74.096l1.427-.37a1 1 0 0 0 .629-.492l1.024-1.89a1 1 0 0 0 .12-.532l-.052-.912a1 1 0 0 0-.707-.9l-.75-.23a1 1 0 0 1-.446-.28l-.603-.657a1 1 0 0 0-1.305-.147l-.82.566a1 1 0 0 1-1.35-.199l-.03-.037a1 1 0 0 0-1.488-.083l-.218.218a1 1 0 0 0-.276.527l-.086.465a1 1 0 0 1-.899.816l-.708.06a1 1 0 0 0-.64.308l-.553.581a1 1 0 0 1-.851.303l-1.952-.25a1 1 0 0 0-1.085.708l-.16.536a1 1 0 0 0 .01.602Zm19.415-4.411-.656.383a.885.885 0 0 0 .871 1.54l.666-.364a.895.895 0 1 0-.881-1.559Z"/>
    </svg>
  );
};
