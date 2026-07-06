// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lt',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.918 9.948.104 1.48a.5.5 0 0 0 .284.416l2.337 1.115a.5.5 0 0 0 .239.048l1.627-.078a.5.5 0 0 1 .412.184l.808.994a.5.5 0 0 1 .054.548l-.536 1.02a.5.5 0 0 0-.05.324l.186.989a.5.5 0 0 0 .328.38L9.544 18a.5.5 0 0 1 .317.333l.372 1.27a.5.5 0 0 0 .519.358l1.442-.113a.5.5 0 0 1 .23.036l.721.297a.5.5 0 0 0 .31.023l.96-.237a.5.5 0 0 0 .353-.324l.21-.613a.5.5 0 0 1 .24-.281l1.459-.762a.5.5 0 0 1 .694.252l.22.537a.5.5 0 0 0 .762.21l.446-.333a.5.5 0 0 0 .058-.75l-.64-.654a.5.5 0 0 1-.133-.452l.494-2.366a.5.5 0 0 1 .133-.248l1.376-1.398a.5.5 0 0 1 .266-.14l1.465-.27a.5.5 0 0 0 .328-.219l.435-.665a.25.25 0 0 0-.18-.385l-.723-.088a.5.5 0 0 1-.41-.663l.334-.95a.5.5 0 0 0-.144-.545l-3.181-2.748a.5.5 0 0 0-.237-.114l-1.583-.29a.5.5 0 0 1-.364-.284l-.502-1.096a.5.5 0 0 0-.758-.19l-.796.608a.5.5 0 0 1-.35.1l-8.309-.784a1 1 0 0 0-.438.057l-1.644.603a.5.5 0 0 0-.157.093L1.54 6.213a.5.5 0 0 0-.167.32l-.159 1.401a.5.5 0 0 0 .031.24l.64 1.626a.5.5 0 0 1 .033.148Z"/></svg>`,
})
export class Lt {
  protected readonly b = inject(GeoIconBase);
}
