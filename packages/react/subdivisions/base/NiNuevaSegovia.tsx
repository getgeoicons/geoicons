// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiNuevaSegovia = ({
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
      <path strokeLinejoin="round" d="M16.314 17.967a1 1 0 0 0 .58.331l2.507.454a1 1 0 0 0 .761-.172l1.067-.766a1 1 0 0 0 .417-.784l.044-1.57c.01-.33.06-.659.15-.977l.807-2.854a1 1 0 0 0-.23-.953L21.34 9.515a2 2 0 0 0-.815-.53l-2.76-.95a.6.6 0 0 1-.329-.862l.51-.906a.6.6 0 0 0-.011-.61l-.033-.053a.6.6 0 0 0-.735-.242l-1.818.73a2 2 0 0 0-.916.742l-3.26 4.866a1.5 1.5 0 0 1-1.56.631l-2.78-.597a2 2 0 0 0-.786-.011l-3.908.725a.8.8 0 0 0-.644.659l-.188 1.16a.8.8 0 0 0 .517.88L5.5 16.485a3 3 0 0 0 .852.175l3.058.176c.32.018.64-.015.948-.097l3.372-.903a1 1 0 0 1 1.017.313z"/>
    </svg>
  );
};
