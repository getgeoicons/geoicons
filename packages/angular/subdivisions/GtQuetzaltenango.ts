// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-quetzaltenango',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.79 16.837a2 2 0 0 0 .602-.558l1.82-2.57a1 1 0 0 0 .043-1.087l-.715-1.206a.6.6 0 0 0-.678-.271l-.709.2a.6.6 0 0 1-.686-.285l-.844-1.509a1 1 0 0 1-.124-.404l-.315-3.718a1 1 0 0 1 .394-.883l.685-.516a.6.6 0 0 0 .236-.534l-.118-1.29a.6.6 0 0 0-.39-.509l-.74-.272a.6.6 0 0 0-.786.403l-.235.85a1 1 0 0 1-.793.72l-1.514.26a1 1 0 0 0-.685.47l-.121.2a1 1 0 0 0 .092 1.162l.64.758a1 1 0 0 1 .22.82l-.328 1.838a1 1 0 0 1-.18.419l-2.294 3.107a2 2 0 0 0-.382 1l-.143 1.515a1 1 0 0 1-.606.827l-.589.249q-.167.07-.349.078l-5.606.228a1 1 0 0 0-.667.292l-1.937 1.938a.6.6 0 0 0 .143.954l3.553 1.883q.325.173.684.261l3.74.927a1 1 0 0 0 1.18-.63L12.719 18a1 1 0 0 1 .395-.497l.919-.6a.6.6 0 0 1 .878.264l.623 1.437a.6.6 0 0 0 .86.276z"/></svg>`,
})
export class GtQuetzaltenango {
  protected readonly b = inject(GeoIconBase);
}
