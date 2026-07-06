// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tibetan-plateau',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.338 10.637-.101 1.806a1 1 0 0 0 .543.947l5.7 2.914a1 1 0 0 0 .624.095l1.288-.22q.154-.025.309-.004l1.845.262a1 1 0 0 0 .745-.194l1.171-.889a1 1 0 0 1 1.336.115l.152.162a1 1 0 0 0 .87.309l1.082-.152a1 1 0 0 1 1.018.513l.734 1.352a1 1 0 0 0 1.257.45l.182-.075a1 1 0 0 0 .577-.63l.33-1.069a1 1 0 0 0-.145-.882l-.648-.896a1 1 0 0 1-.044-1.108l.337-.55a1 1 0 0 1 .493-.412l1.376-.531a.631.631 0 0 0 .125-1.112l-1.95-1.313a1 1 0 0 1-.402-.552l-.423-1.464a1 1 0 0 0-.416-.56l-1.231-.8a1 1 0 0 0-.606-.16l-1.849.113a1 1 0 0 1-.332-.036l-1.548-.437a1 1 0 0 0-.502-.01l-2.173.515a.6.6 0 0 0-.443.733l.236.923a.6.6 0 0 1-.658.744l-1.821-.235a1 1 0 0 0-.559.089l-1.631.779a1 1 0 0 1-.475.096l-2.653-.117a1 1 0 0 0-.673.222l-.677.548a1 1 0 0 0-.37.72Z"/></svg>`,
})
export class TibetanPlateau {
  protected readonly b = inject(GeoIconBase);
}
