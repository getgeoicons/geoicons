// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ye = ({
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
      <path strokeLinejoin="round" d="m2.39 8.606-.936 2.088a.5.5 0 0 0-.04.143l-.202 1.603a.5.5 0 0 0 .014.195l1.587 5.788a.5.5 0 0 0 .482.368h2.111a.5.5 0 0 0 .347-.14l1.273-1.23a.5.5 0 0 1 .347-.14h2.014a.5.5 0 0 0 .195-.039l10.93-4.62a.5.5 0 0 0 .271-.281l.431-1.122a.5.5 0 0 1 .257-.274l1.329-.616-2.264-5.12-6.006.798a.5.5 0 0 0-.158.048l-1.749.875a.5.5 0 0 0-.19.166l-1.577 2.322a.5.5 0 0 1-.707.125l-.825-.597a.5.5 0 0 0-.249-.093l-6.185-.54a.5.5 0 0 0-.5.293Z"/>
    </svg>
  );
};
