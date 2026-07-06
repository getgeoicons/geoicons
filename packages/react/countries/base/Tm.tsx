// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tm = ({
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
      <path strokeLinejoin="round" d="m19.267 17.513-2.62 1.844a.5.5 0 0 1-.49.048l-1.345-.597a.5.5 0 0 1-.296-.467l.025-1.266a.5.5 0 0 0-.51-.51l-.706.015a.5.5 0 0 1-.372-.154l-1.546-1.614a.5.5 0 0 0-.202-.128l-2.67-.897a.5.5 0 0 0-.175-.026l-2.224.074a.5.5 0 0 0-.372.186l-.645.798a.5.5 0 0 1-.256.168l-1.54.424.243-2.949a.5.5 0 0 0-.056-.273l-.576-1.101a.5.5 0 0 0-.19-.199l-.91-.537a.5.5 0 0 1-.228-.566l.316-1.12a.5.5 0 0 0-.016-.318l-.583-1.493a.5.5 0 0 1 .123-.546l.688-.648a.5.5 0 0 1 .308-.135l1.33-.095a.5.5 0 0 1 .435.197l1.388 1.838a.5.5 0 0 0 .382.199l1.832.061a.5.5 0 0 0 .515-.454l.07-.764a.5.5 0 0 1 .171-.332l1.716-1.484a.5.5 0 0 1 .54-.075l1.549.728a.5.5 0 0 1 .279.362l.268 1.458a.5.5 0 0 0 .435.407l1.953.22a.5.5 0 0 1 .413.322l.77 2.067a.5.5 0 0 0 .182.235l4.051 2.835a.5.5 0 0 0 .126.064l1.594.543a.5.5 0 0 1 .338.46l.016.784a.493.493 0 0 1-.508.5l-2.03-.053a.5.5 0 0 0-.5.389l-.29 1.277a.5.5 0 0 1-.2.298Z"/>
    </svg>
  );
};
