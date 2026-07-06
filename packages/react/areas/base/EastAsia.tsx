// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EastAsia = ({
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
      <path strokeLinejoin="round" d="m2.723 9.416-.644.02a.877.877 0 0 0-.635 1.451l.401.46a1 1 0 0 1 .228.853l-.095.473a1 1 0 0 0 .278.906l.683.676q.105.104.234.172l1.186.631a1 1 0 0 0 .38.113l.913.082c.14.012.28-.005.411-.05l.581-.197a.97.97 0 0 1 1.227 1.24l-.036.103a1 1 0 0 0 .127.91l.245.345a1 1 0 0 0 1.19.35l.726-.293a1 1 0 0 1 .81.029l.927.45a1 1 0 0 0 .758.047l1.406-.476a1 1 0 0 0 .329-.188l.9-.77a1 1 0 0 0 .269-.365l.398-.928a1 1 0 0 0 .081-.418l-.011-.491a1 1 0 0 0-.158-.515l-.653-1.021a.757.757 0 0 1 1.172-.946l.34.337a.72.72 0 0 0 1.177-.776l-.34-.862a1 1 0 0 1 .045-.833l.34-.646q.047-.09.075-.186l.375-1.287A.646.646 0 0 0 17.636 7l-.57.096a1 1 0 0 1-1.074-.567l-.112-.243a.91.91 0 0 0-1.712.174l-.02.086a1 1 0 0 1-.911.77l-1.525.096a1 1 0 0 1-.522-.11l-1.357-.703a1 1 0 0 0-1.044.077l-.304.22a1 1 0 0 1-.848.153l-.43-.117a1 1 0 0 0-.545.006l-1.944.572a1 1 0 0 0-.572.44l-.598.985a1 1 0 0 1-.825.48Zm19.241 3.507-1.778 1.428a.818.818 0 1 1-1.014-1.283l1.843-1.434a.25.25 0 0 0 .097-.2l-.02-2.38a.844.844 0 1 1 1.688.017l-.069 2.35a2 2 0 0 1-.747 1.502Z"/>
    </svg>
  );
};
