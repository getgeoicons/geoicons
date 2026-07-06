// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-my',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.664 9.372-2.058-.348a.25.25 0 0 0-.28.323l1.26 3.918a.5.5 0 0 0 .201.265l2.006 1.312a.5.5 0 0 0 .28.082l.493-.005a.5.5 0 0 0 .43-.748l-.435-.762a.5.5 0 0 1-.064-.212l-.15-2.11a.5.5 0 0 0-.147-.32L3.933 9.51a.5.5 0 0 0-.27-.138Zm8.786 6.2-.81-1.16a.25.25 0 0 1 .227-.393l1.417.121a.5.5 0 0 0 .378-.127l.995-.9 3.263-2.315a.5.5 0 0 0 .136-.145l1.274-2.056a.5.5 0 0 1 .736-.128l2.313 1.838a.5.5 0 0 1 .057.73l-.995 1.082a.5.5 0 0 1-.44.156l-1.792-.262a.5.5 0 0 0-.533.3l-1.087 2.561a.5.5 0 0 1-.497.303l-1.829-.137a.5.5 0 0 0-.198.025l-2.045.695a.5.5 0 0 1-.57-.188Z"/></svg>`,
})
export class My {
  protected readonly b = inject(GeoIconBase);
}
