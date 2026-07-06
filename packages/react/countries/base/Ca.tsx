// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ca = ({
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
      <path strokeLinejoin="round" d="m13.342 20.77-6.421-.016a.5.5 0 0 1-.379-.175l-2.649-3.096a.5.5 0 0 1-.12-.325v-3.852a.5.5 0 0 1 .418-.493l1.894-.314a.5.5 0 0 1 .304.046l2.869 1.428a.5.5 0 0 0 .22.053l2.085.014a.5.5 0 0 0 .27-.077l.932-.59a.5.5 0 0 1 .244-.076l1.201-.057a.5.5 0 0 1 .514.402l.009.042a.5.5 0 0 1-.123.436l-2.578 2.801a.5.5 0 0 0 .067.738l2.489 1.873a.5.5 0 0 0 .8-.374l.09-1.758a.5.5 0 0 1 .804-.37l3.236 2.48a.5.5 0 0 1 .167.229l.27.755a.5.5 0 0 1-.532.665l-.818-.1a.5.5 0 0 0-.263.039L14.97 22.59a.5.5 0 0 1-.666-.27l-.499-1.238a.5.5 0 0 0-.462-.313Zm.238-14.312-1.363-1.014a.5.5 0 0 1-.066-.742l2.845-3.04a.5.5 0 0 1 .285-.151l1.732-.282a.5.5 0 0 1 .33.06l1.227.706a.5.5 0 0 1 .19.672L15.723 8.26a.5.5 0 0 1-.491.259l-1.45-.153a.5.5 0 0 1-.374-.76l.299-.486a.5.5 0 0 0-.128-.663Zm3.293 6.384-2.674-1.399a.5.5 0 0 1-.248-.583l.145-.496a.5.5 0 0 1 .67-.322l3.377 1.396a.5.5 0 0 1 .266.26l.896 2.037a.5.5 0 0 1 .003.397l-.543 1.276a.5.5 0 0 1-.726.227l-.992-.624a.5.5 0 0 1-.216-.559l.291-1.031a.5.5 0 0 0-.25-.579Zm-7.768-.831-2.002-1.27a.5.5 0 0 1-.23-.478l.11-.981a.5.5 0 0 1 .753-.374l1.216.722a.5.5 0 0 0 .314.066l1.335-.158a.5.5 0 0 1 .546.381l.351 1.484a.5.5 0 0 1-.465.615l-1.639.07a.5.5 0 0 1-.29-.077Z"/>
    </svg>
  );
};
