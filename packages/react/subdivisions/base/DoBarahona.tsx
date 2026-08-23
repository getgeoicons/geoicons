// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoBarahona = ({
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
      <path strokeLinejoin="round" d="M5.643 13.551a.3.3 0 0 1 .148.237l.123 1.663a1 1 0 0 1-.54.964l-.582.298a1 1 0 0 0-.536.764l-.027.214a1 1 0 0 0 .365.906l1.4 1.125a1 1 0 0 0 .344.18l1.346.396a1 1 0 0 1 .69.728l.27 1.134a.64.64 0 0 0 1.093.288l1.605-1.731c.461-.497.87-1.04 1.222-1.62l3.184-5.256a2 2 0 0 0-.014-2.095l-1.163-1.864a1 1 0 0 1 .077-1.165l.84-1.022a1 1 0 0 1 1.19-.273l.768.353a1 1 0 0 1 .349.266l.935 1.116a.3.3 0 0 0 .506-.075l.432-1.017a1 1 0 0 0-.012-.81l-.446-.968a1 1 0 0 0-.551-.516l-.913-.348a1 1 0 0 1-.574-1.299l.601-1.54a1 1 0 0 0-.891-1.363l-.181-.007a1 1 0 0 0-.643.201l-3.875 2.927a1 1 0 0 0-.387.94l.096.667a1 1 0 0 1-.42.965l-2.025 1.4a1 1 0 0 1-1.051.054l-1.66-.915a.3.3 0 0 0-.377.072l-.638.777a.3.3 0 0 0 .028.41l.475.442a.3.3 0 0 1 .09.285l-.336 1.505a.3.3 0 0 1-.334.232l-.898-.124a.3.3 0 0 0-.341.297v1.309a.3.3 0 0 0 .149.26z"/>
    </svg>
  );
};
