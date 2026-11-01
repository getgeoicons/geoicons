// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Fr = ({
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
      <path strokeLinejoin="round" d="m5.782 18.128.394-.742a1.9 1.9 0 0 0 .226-.811c.061-1.197.08-2.566.086-3.253a1.5 1.5 0 0 0-.238-.815l-1.4-2.169a2 2 0 0 0-1.381-.892l-.98-.148a1 1 0 0 1-.767-.59l-.168-.387a.8.8 0 0 1 .494-1.082l.862-.27a.93.93 0 0 1 .983.282c.237.278.614.39.965.288l.223-.065a1 1 0 0 0 .712-1.087l-.091-.718a.6.6 0 0 1 .788-.644l1.464.499a1 1 0 0 0 .994-.206l1.333-1.21a1 1 0 0 0 .328-.729l.011-1.005a.6.6 0 0 1 .466-.577l.416-.096a.6.6 0 0 1 .524.128l2.993 2.55a3 3 0 0 0 .943.544L19.85 6.3a.6.6 0 0 1 .374.74l-.768 2.543a1 1 0 0 1-.278.445l-1.608 1.487a.6.6 0 0 0 .11.962l.503.287a.6.6 0 0 1 .3.57l-.176 2.195a1 1 0 0 0 .511.954l.272.151a.6.6 0 0 1 .11.972l-1.335 1.197a1 1 0 0 1-1.008.196l-2.172-.785a1 1 0 0 0-.84.074l-.489.282a1 1 0 0 0-.494.972l.011.109a.6.6 0 0 1-.724.65l-5.965-1.307a.6.6 0 0 1-.402-.867Zm14.244 2.545.031.546a.909.909 0 0 0 1.745.302l.653-1.548a.884.884 0 0 0-1.321-1.07l-.376.263a1.72 1.72 0 0 0-.732 1.507Z"/>
    </svg>
  );
};
