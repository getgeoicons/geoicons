// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Lu = ({
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
      <path strokeLinejoin="round" d="m4.546 9.456.127 2.98a.5.5 0 0 0 .159.345l1.82 1.692a.5.5 0 0 1 .16.353l.022.813a.5.5 0 0 0 .234.41l.512.321a.5.5 0 0 1 .145.71l-1.87 2.677a.5.5 0 0 0 .023.602l.52.638a.5.5 0 0 0 .326.18l1.581.193a.5.5 0 0 1 .415.34l.243.741a.5.5 0 0 0 .481.344l1.583-.02a.5.5 0 0 0 .45-.293l.437-.967a.5.5 0 0 1 .39-.29l1.551-.205a.5.5 0 0 1 .319.064l2.26 1.323.039-2.978a.5.5 0 0 1 .073-.254l2.506-4.108a.5.5 0 0 0 .069-.197l.282-2.187a.5.5 0 0 0-.372-.549l-3.364-.863a.5.5 0 0 1-.253-.156l-1.789-2.053a.5.5 0 0 1-.077-.12L11.714 4.96a.5.5 0 0 1-.037-.304l.328-1.69a.5.5 0 0 0-.012-.238l-.212-.713a.5.5 0 0 0-.33-.335l-1.431-.446a.5.5 0 0 0-.217-.018l-.66.091a.5.5 0 0 0-.43.527l.031.509a.5.5 0 0 1-.319.498l-.714.276a.5.5 0 0 0-.27.248L4.597 9.216a.5.5 0 0 0-.05.24Z"/>
    </svg>
  );
};
