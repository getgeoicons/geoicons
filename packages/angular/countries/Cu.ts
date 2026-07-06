// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.581 8.704 1.65 10.2c-.132.212.093.465.318.359l3.794-1.786a.5.5 0 0 1 .33-.034l.845.204a.5.5 0 0 1 .374.391l.08.415a.5.5 0 0 0 .426.4l2.198.288a.5.5 0 0 1 .16.049l3.09 1.557a.5.5 0 0 1 .262.33l.334 1.398a.5.5 0 0 0 .533.382l1.336-.125a.5.5 0 0 1 .497.282l.296.618a.5.5 0 0 1-.053.518l-.808 1.065a.5.5 0 0 0 .414.802l4.173-.134a.5.5 0 0 0 .238-.07l1.597-.945a.5.5 0 0 0 .005-.857l-2.036-1.239a.5.5 0 0 1-.235-.354l-.098-.662a.5.5 0 0 0-.313-.393l-1.34-.521a.5.5 0 0 1-.178-.118l-3.064-3.153a.5.5 0 0 0-.398-.15l-1.473.115a.5.5 0 0 1-.328-.09L9.943 6.84a.5.5 0 0 0-.277-.092l-3.803-.091a.5.5 0 0 0-.28.078L2.736 8.547a.5.5 0 0 0-.156.157Z"/><path stroke-linejoin="round" d="m4.907 13.867.752.209a.5.5 0 0 0 .618-.357l.188-.726a.5.5 0 0 0-.354-.607l-.751-.203a.5.5 0 0 0-.614.355l-.19.72a.5.5 0 0 0 .35.61Z"/></svg>`,
})
export class Cu {
  protected readonly b = inject(GeoIconBase);
}
