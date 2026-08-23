// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-ontario',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.46 7.04 4.328-5.13a.6.6 0 0 1 .748-.138l2.268 1.25a2 2 0 0 0 1.026.248l1.45-.044a.6.6 0 0 1 .6.453l.437 1.736a2 2 0 0 0 .722 1.098l1.673 1.285a1 1 0 0 1 .347.498L16.508 13a2 2 0 0 0 1.188 1.276l1.5.58a1 1 0 0 0 .87-.07l1.344-.796a.6.6 0 0 1 .804.183l.333.5a.6.6 0 0 1-.044.724l-1.592 1.848a1 1 0 0 1-.597.335l-.838.137a1 1 0 0 0-.82 1.18l.065.328a.8.8 0 0 1-.467.889l-1.278.553a2 2 0 0 0-.668.472l-.924.992a.6.6 0 0 1-.718.122l-.527-.276a.6.6 0 0 1-.205-.885l.803-1.103a2 2 0 0 0 .357-.849l.158-.949a2 2 0 0 0-.105-1.044l-.14-.363a1 1 0 0 0-.917-.642l-1.147-.019a1 1 0 0 1-.362-.074l-.644-.264a1 1 0 0 1-.489-.428l-.902-1.572a1 1 0 0 0-.702-.489l-1.389-.233a1 1 0 0 0-.921.332l-.603.695a1 1 0 0 1-.932.329l-3.71-.665a1 1 0 0 1-.673-.458l-.265-.428a1 1 0 0 1-.15-.531l.022-4.656a1 1 0 0 1 .236-.64Z"/></svg>`,
})
export class CaOntario {
  protected readonly b = inject(GeoIconBase);
}
