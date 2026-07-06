// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NorthIsland = ({
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
      <path strokeLinejoin="round" d="m11.051 22.548-.952-.653a.6.6 0 0 1-.124-.875l.813-.99a1 1 0 0 0 .2-.4l.108-.447a1 1 0 0 0-.114-.75l-.283-.474a1 1 0 0 0-.491-.417l-1.986-.784a.96.96 0 0 1-.563-1.184l.004-.01a1 1 0 0 1 .681-.661l.688-.194a1 1 0 0 0 .72-.835l.293-2.269a1 1 0 0 0-.052-.47l-.936-2.566a1 1 0 0 0-.123-.235L6.57 4.999a1 1 0 0 1-.182-.514l-.025-.402a1 1 0 0 0-.15-.466l-.641-1.025a.776.776 0 1 1 1.342-.776l.38.71a1 1 0 0 0 .503.455l.759.311a1 1 0 0 1 .457.376l.855 1.302a1 1 0 0 1 .156.422l.258 2.01.104.553a1 1 0 0 0 .268.513l.093.095a.6.6 0 0 0 .975-.17l.217-.476a.6.6 0 0 1 1.145.248v1.87a1 1 0 0 0 .372.779l.994.8a1 1 0 0 0 .523.216l.554.058a1 1 0 0 0 1-.55l.06-.122a1 1 0 0 1 1.189-.511l.594.181a.6.6 0 0 1 .406.722l-.487 1.913a1 1 0 0 1-.172.358l-.846 1.114a.6.6 0 0 1-.592.226l-.447-.087a1 1 0 0 0-.779.173l-.155.113a1 1 0 0 0-.365 1.112l.172.54a.6.6 0 0 1-.053.483l-.937 1.614-.819 1.963a1 1 0 0 1-.295.394l-1.235.996a.6.6 0 0 1-.716.028Z"/>
    </svg>
  );
};
