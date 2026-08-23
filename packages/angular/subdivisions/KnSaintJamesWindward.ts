// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-saint-james-windward',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.83 10.7 1.545 5.985a.6.6 0 0 1-.023-.78l.618-.769a.6.6 0 0 0 .09-.6l-.181-.448a.6.6 0 0 1 .136-.653l.448-.439a.6.6 0 0 1 .663-.12l1.007.445a1 1 0 0 0 .713.036l2.459-.798a1 1 0 0 1 .551-.02l1.199.3a1 1 0 0 0 .425.013l1.258-.234a1.5 1.5 0 0 1 1.376.457l2.345 2.536a1 1 0 0 0 .63.316l2.127.222a1 1 0 0 1 .687.383l3.042 3.93a1 1 0 0 1 .207.677l-.204 3.168c-.014.21.006.422.059.627l1.501 5.837c.08.311.084.637.012.95l-.073.316a1 1 0 0 1-1.115.765l-.251-.035a1 1 0 0 1-.55-.268l-.673-.643a2 2 0 0 0-.883-.491l-9.693-2.501a.6.6 0 0 1-.399-.337l-3.05-6.862a1 1 0 0 0-.173-.267Z"/></svg>`,
})
export class KnSaintJamesWindward {
  protected readonly b = inject(GeoIconBase);
}
