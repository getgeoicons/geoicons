// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EastAsiaSimplified = ({
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
      <path strokeLinejoin="round" d="m3.253 8.75-1.04.03a1 1 0 0 0-.966.916l-.011.133a1 1 0 0 0 .242.741l.615.706a1 1 0 0 1 .227.851l-.169.854a1 1 0 0 0 .278.905l.983.973q.104.104.233.172l1.569.835a1 1 0 0 0 .38.113l1.253.112a1 1 0 0 0 .41-.05l.916-.31a1 1 0 0 1 1.055.266l.186.2a1 1 0 0 1 .21 1.012l-.133.379a1 1 0 0 0 .127.91l.5.707a1 1 0 0 0 1.19.35l1.206-.486a1 1 0 0 1 .81.029l1.36.66a1 1 0 0 0 .76.048l1.911-.648a1 1 0 0 0 .33-.188l1.213-1.039a1 1 0 0 0 .269-.364l.546-1.271a1 1 0 0 0 .081-.42l-.018-.743a1 1 0 0 0-.157-.515l-.859-1.344a.951.951 0 0 1 1.471-1.188l.428.424a.905.905 0 0 0 1.479-.975l-.47-1.192a1 1 0 0 1 .045-.832l.493-.94q.046-.088.075-.185l.478-1.641a.81.81 0 0 0-.913-1.026l-.909.153a1 1 0 0 1-1.074-.566l-.267-.578a1 1 0 0 0-1.035-.573l-.202.026a1 1 0 0 0-.846.764l-.092.39a1 1 0 0 1-.911.77l-2.176.136a1 1 0 0 1-.522-.11l-1.907-.987a1 1 0 0 0-1.045.077l-.608.438a1 1 0 0 1-.848.154l-.728-.198a1 1 0 0 0-.545.006l-2.607.767a1 1 0 0 0-.572.44L4.077 8.27a1 1 0 0 1-.824.48Z"/>
    </svg>
  );
};
