// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pontic-steppe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m19.356 9.872 1.443 1.014a.907.907 0 0 0 1.063-1.47l-1.286-.956a1 1 0 0 1-.387-.623L19.964 6.6a1 1 0 0 0-.114-.315l-.086-.152a.6.6 0 0 0-1.044.001l-.286.506a1 1 0 0 1-.758.502l-1.454.164a1 1 0 0 0-.372.119l-1.63.902a1 1 0 0 1-.232.092l-3.975 1.032a1 1 0 0 0-.261.11l-3.27 1.954a1 1 0 0 1-.323.123l-3.27.634a.6.6 0 0 0-.481.662l.075.62a1 1 0 0 1-.186.713l-.775 1.054a.6.6 0 0 0 .082.801l.652.587a.6.6 0 0 0 .92-.145l.785-1.35a1 1 0 0 1 1.605-.17l.447.491a1 1 0 0 0 .69.326l3.302.167a1 1 0 0 1 .39.1l4.1 2.012a.6.6 0 0 0 .83-.739l-.585-1.65a1 1 0 0 0-.278-.412l-.96-.854a1 1 0 0 1-.08-1.416l.877-.974a1 1 0 0 1 .88-.322l1.73.239a.6.6 0 0 0 .672-.697l-.078-.453a1 1 0 0 1 .985-1.171h.293a1 1 0 0 1 .575.181Z"/></svg>`,
})
export class PonticSteppe {
  protected readonly b = inject(GeoIconBase);
}
