// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-georgia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M13.044 1.525a.57.57 0 0 0-.527-.313l-9.583.329a.3.3 0 0 0-.285.351l1.534 8.78q.015.088.046.172l1.222 3.348a1 1 0 0 1-.047.796l-.347.682a4 4 0 0 0-.432 1.908l.03 1.198a4 4 0 0 0 .272 1.358l.44 1.125a.6.6 0 0 0 .494.378l10.183 1.105a.6.6 0 0 0 .65-.462l.106-.463a.6.6 0 0 1 .732-.448l1.111.282a.6.6 0 0 0 .731-.44l.746-3.085a4 4 0 0 1 .657-1.418l.418-.573a.6.6 0 0 0 .053-.622l-2.07-4.148a3 3 0 0 0-.331-.522l-4.432-5.6a2 2 0 0 0-.541-.476l-1.361-.813a.6.6 0 0 1-.189-.852l.682-1.005a.57.57 0 0 0 .037-.572Z"/></svg>`,
})
export class UsGeorgia {
  protected readonly b = inject(GeoIconBase);
}
