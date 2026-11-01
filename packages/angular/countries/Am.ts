// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-am',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.995 11.473-.594-2.556a1 1 0 0 1 .173-.824l.88-1.181a1 1 0 0 0 0-1.197L1.849 3.569a.6.6 0 0 1 .395-.953l9.404-1.348a1 1 0 0 1 .825.26l3.542 3.313a.6.6 0 0 1-.05.92l-.794.59a1 1 0 0 0-.266 1.307l.63 1.078a2 2 0 0 0 1.153.907l1.04.311a1 1 0 0 1 .574 1.468l-.69 1.165a1 1 0 0 0 .333 1.36l4.261 2.642a.6.6 0 0 1 .257.688l-.352 1.136a2 2 0 0 0-.072.856l.35 2.626a.6.6 0 0 1-.536.677l-1.829.18a.6.6 0 0 1-.628-.405l-1.716-5.094a1 1 0 0 0-.993-.68l-2.275.103a1 1 0 0 1-.884-.454l-.697-1.073a1 1 0 0 0-1.075-.427l-1.07.26a1 1 0 0 1-.988-.31l-1.67-1.897a1 1 0 0 0-.695-.338l-3.42-.192a1 1 0 0 1-.918-.772Z"/></svg>`,
})
export class Am {
  protected readonly b = inject(GeoIconBase);
}
