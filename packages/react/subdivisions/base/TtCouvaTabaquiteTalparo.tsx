// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtCouvaTabaquiteTalparo = ({
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
      <path strokeLinejoin="round" d="M19.431 22.66a1 1 0 0 0 .803-.074l1.571-.875a1 1 0 0 0 .507-.752l.459-3.755a.6.6 0 0 0-.443-.654l-1.016-.266a.6.6 0 0 1-.36-.893l2.031-3.323a.6.6 0 0 0-.323-.883l-.719-.238a.6.6 0 0 1-.369-.79l1.084-2.73a.6.6 0 0 0-.423-.807l-.667-.153a.6.6 0 0 1-.464-.627l.227-3.187a1 1 0 0 0-.397-.871l-.32-.24a1 1 0 0 0-.984-.122l-1.426.594a1 1 0 0 1-.475.073l-3.25-.298a1 1 0 0 0-.806.297l-.525.536a1 1 0 0 1-1.105.221l-1.175-.497a.6.6 0 0 0-.832.51L9.736 7.04a1 1 0 0 1-1.017.93l-1.634-.033a2 2 0 0 1-.848-.208L3.669 6.457a.6.6 0 0 0-.841.366l-2.13 7.144a1 1 0 0 0-.016.51l.669 2.904a1 1 0 0 0 .272.488l1.406 1.387a1 1 0 0 1 .276.92l-.362 1.702a.6.6 0 0 0 .642.722l4.237-.39q.17-.016.325-.087l3.724-1.705a1 1 0 0 1 .733-.04z"/>
    </svg>
  );
};
