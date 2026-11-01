// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const At = ({
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
      <path strokeLinejoin="round" d="m9.081 12.178 1.322.385a.6.6 0 0 0 .721-.809l-.367-.873a1 1 0 0 1 .302-1.172l2.092-1.655a1 1 0 0 1 .977-.15l1.085.414a.6.6 0 0 0 .748-.287l.46-.895a1 1 0 0 1 1.155-.507l4.036 1.114a1 1 0 0 1 .726.834l.39 2.965a.6.6 0 0 1-.476.666l-.77.157a.6.6 0 0 0-.48.558l-.066 1.33a2 2 0 0 1-.67 1.398l-.39.344a2 2 0 0 1-1.132.494l-1.61.157a2 2 0 0 0-.922.33l-.565.381a1 1 0 0 1-.748.152l-4.33-.836a2 2 0 0 1-1.348-.954l-.304-.52a.6.6 0 0 0-.671-.277l-2.666.706a2 2 0 0 1-1.09-.019l-2.852-.861a.6.6 0 0 1-.427-.59l.024-.942a.6.6 0 0 1 .777-.558l1.765.545a2 2 0 0 0 1.143.01l3.606-1.036a1 1 0 0 1 .555.001Z"/>
    </svg>
  );
};
