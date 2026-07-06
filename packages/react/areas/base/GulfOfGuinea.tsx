// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GulfOfGuinea = ({
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
      <path strokeLinejoin="round" d="m18.89 19.936-4.952-.263.954-2.583a1 1 0 0 0-.033-.772l-1.781-3.785a1 1 0 0 1-.093-.494l.062-.901a1 1 0 0 0-.543-.959l-1.784-.912a1 1 0 0 0-.634-.094l-4.358.79A1 1 0 0 1 5 9.814L3.017 8.51a1 1 0 0 1-.244-.228L1.409 6.5a1 1 0 0 1-.205-.618l.01-.852a.893.893 0 0 1 1.693-.386l.635 1.284a1 1 0 0 0 .545.493l2.303.864a1 1 0 0 0 .515.05l2.148-.357a1 1 0 0 0 .51-.248l.894-.815a1 1 0 0 1 .637-.26l3.24-.117a1 1 0 0 1 1.026.856l.437 3.019a1 1 0 0 0 1.153.843l4.184-.692a1 1 0 0 1 .937.354l.332.406a1 1 0 0 1 .132 1.056l-.483 1.033a1 1 0 0 0-.055.697l.559 1.957a1 1 0 0 1-.09.765l-.727 1.292a.6.6 0 0 1-.69.282l-1.16-.335a.6.6 0 0 0-.763.516z"/>
    </svg>
  );
};
