// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-moore-s-island',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.273 3.945-.204-.927a1 1 0 0 1 .39-1.025l.539-.391a1 1 0 0 1 1.129-.031l3.927 2.533a3 3 0 0 1 .925.943l1.067 1.724a1 1 0 0 1 .103.828l-.691 2.183a2 2 0 0 1-.556.872l-3.282 3.004a1 1 0 0 0-.324.784l.033.685a1 1 0 0 1-.848 1.035l-1.724.265a.905.905 0 0 1-1.041-.899l.008-1.58a1 1 0 0 1 1.121-.988l.478.058a1 1 0 0 0 1.069-.672l.35-1.038a8 8 0 0 0 .403-2.02l.045-.653a1 1 0 0 0-.51-.94l-.857-.478a1 1 0 0 1-.419-.45l-.638-1.368a7 7 0 0 1-.493-1.454ZM9.906 20.91l-1.436.274a.612.612 0 0 1-.553-1.03L9.55 18.49a1 1 0 0 1 .515-.28l.99-.2a1 1 0 0 1 1.076.502l1.533 2.808a.974.974 0 0 1-.779 1.437l-.072.006a1 1 0 0 1-.802-.308l-1.193-1.253a1 1 0 0 0-.912-.293Z"/></svg>`,
})
export class BsMooreSIsland {
  protected readonly b = inject(GeoIconBase);
}
