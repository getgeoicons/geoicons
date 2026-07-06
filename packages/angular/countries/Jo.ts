// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.101 9.758 2.764 21.374a.5.5 0 0 0 .398.59l4.174.783a.5.5 0 0 0 .471-.165l2.613-3.037a.5.5 0 0 1 .291-.166l2.65-.47a.5.5 0 0 0 .385-.328l.473-1.359a.5.5 0 0 1 .224-.27l.96-.549a.5.5 0 0 0 .128-.764l-3.892-4.427 8.409-2.286a.5.5 0 0 0 .244-.153l.862-.98a.5.5 0 0 0 .104-.472l-1.625-5.482a.5.5 0 0 0-.75-.279L10.887 6.7a.5.5 0 0 1-.333.075l-1.587-.203a.5.5 0 0 1-.312-.164L7.29 4.863a.5.5 0 0 0-.412-.168l-1.239.092a.5.5 0 0 0-.463.491l-.064 4.389a.5.5 0 0 1-.01.091Z"/></svg>`,
})
export class Jo {
  protected readonly b = inject(GeoIconBase);
}
