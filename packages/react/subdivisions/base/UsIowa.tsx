// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsIowa = ({
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
      <path strokeLinejoin="round" d="M3.875 17.88a.3.3 0 0 0 .29.218l12.384-.106a.6.6 0 0 1 .32.09l1.296.8a.6.6 0 0 0 .855-.249l.887-1.835a1 1 0 0 0 .067-.688l-.307-1.172a.664.664 0 0 1 .484-.813l1.421-.348a1 1 0 0 0 .713-.663l.337-1.04a1 1 0 0 0-.206-.976L20.113 8.53a1 1 0 0 1-.23-.449l-.651-2.905a.3.3 0 0 0-.29-.234L1.587 4.77a.3.3 0 0 0-.303.292l-.08 3.364a1 1 0 0 0 .038.3z"/>
    </svg>
  );
};
