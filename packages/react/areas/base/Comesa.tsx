// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Comesa = ({
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
      <path strokeLinejoin="round" d="m4.737 2.354.035-.524a.638.638 0 0 1 1.253-.122l.108.406a1 1 0 0 0 .556.655l.863.389a.92.92 0 0 0 1.067-.23.92.92 0 0 1 .846-.296l2.044.355a1 1 0 0 1 .765.633l1.747 4.638a1 1 0 0 0 .16.28l.81.992a.91.91 0 0 0 .99.29l.256-.085a.75.75 0 0 1 .89 1.074l-.731 1.327a1 1 0 0 1-.242.29l-1.298 1.065a1 1 0 0 0-.285.38l-.584 1.363a1 1 0 0 0-.075.508l.267 2.328a1 1 0 0 1-.368.895l-.593.474a1 1 0 0 0-.374.834l.026.48a.97.97 0 0 1-1.822.51l-.856-1.598a.779.779 0 0 0-1.464.322l-.108 1.856a.973.973 0 0 1-1.013.916l-.07-.003a.804.804 0 0 1-.768-.767l-.043-.96a1 1 0 0 0-.083-.355l-.563-1.29a1 1 0 0 1-.04-.693l.302-.986a1 1 0 0 0 .015-.53l-.32-1.31a1 1 0 0 1 .597-1.164l.203-.082a1 1 0 0 0 .57-.6l.52-1.496a1 1 0 0 1 .898-.671l.638-.03a1 1 0 0 1 .42.072l1.144.461a1 1 0 0 0 .64.037l.288-.08a1 1 0 0 0 .675-1.301l-.18-.5a1 1 0 0 0-1.081-.651l-1.318.187a1 1 0 0 1-1.026-.527l-.01-.017a1 1 0 0 1-.07-.755l.269-.88A1 1 0 0 0 8.68 6.67L5.66 5.261a1 1 0 0 1-.56-.728l-.35-1.935a1 1 0 0 1-.013-.244Zm12.771 17.514.075-.012c.35-.059.642-.3.765-.632l.788-2.132q.045-.12.057-.248l.075-.75a.722.722 0 0 0-1.288-.516l-.545.699a1 1 0 0 1-.179.178l-.256.197a1 1 0 0 0-.378.952l.09.56q.02.116.01.232l-.05.71a.72.72 0 0 0 .836.762Z"/>
    </svg>
  );
};
