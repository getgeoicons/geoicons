// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-murray-darling-basin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.016 17.466-.507.866a.6.6 0 0 0 .226.827l.874.488a.6.6 0 0 0 .604-.012l.714-.434a1 1 0 0 1 1.372.33l.815 1.329a1 1 0 0 0 .68.462l5.209.911a1 1 0 0 0 .34 0l2.407-.412a1 1 0 0 0 .711-.511l.595-1.104a.6.6 0 0 1 .877-.203l.596.426a.669.669 0 0 0 1.055-.61l-.21-2.128a1 1 0 0 1 .103-.55l.716-1.413a1 1 0 0 0-.05-.992l-.196-.305a1 1 0 0 1 .646-1.521l1.135-.226a1 1 0 0 0 .801-1.067l-.068-.788a1 1 0 0 1 .08-.488l1.027-2.338a1 1 0 0 0-.112-.996L20.888 4.88a1 1 0 0 0-.805-.406h-2.695a.94.94 0 0 1-.94-.991.94.94 0 0 0-.547-.906l-1.437-.658a1 1 0 0 0-.8-.014l-1.004.418a1 1 0 0 0-.362.258l-.986 1.106a1 1 0 0 0-.219.403L9.77 8.947a1 1 0 0 1-.133.292l-1.299 1.948a1 1 0 0 1-.254.261l-2.302 1.629a1 1 0 0 1-.368.162l-2.49.532a1 1 0 0 0-.646.459l-.288.474a1 1 0 0 0-.125.715l.269 1.346a1 1 0 0 1-.118.701Z"/></svg>`,
})
export class MurrayDarlingBasin {
  protected readonly b = inject(GeoIconBase);
}
