// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.845 9.985 1.808 7.868 1.266 11a.5.5 0 0 0 .287.541l1.365.618a.5.5 0 0 0 .286.038l2.68-.435a.5.5 0 0 0 .28-.147l2.392-2.482a.5.5 0 0 1 .59-.097l2.198 1.143a.5.5 0 0 1 .173.148l1.215 1.658a.5.5 0 0 0 .464.2l1.703-.208a.5.5 0 0 1 .318.067l2.631 1.579a.5.5 0 0 0 .2.068l1.305.15a.5.5 0 0 1 .443.496v.784a.5.5 0 0 0 .128.334l.415.461a.5.5 0 0 1 .111.462l-.24.912a.5.5 0 0 0 .081.424l.327.443a.5.5 0 0 0 .403.204h.572a.5.5 0 0 0 .5-.5v-1.8q0-.085.03-.167l.644-1.815a.5.5 0 0 0 .029-.188l-.062-1.456a.5.5 0 0 0-.5-.48h-1.14a.5.5 0 0 1-.2-.04l-2.168-.947a.5.5 0 0 1-.248-.235l-.715-1.43a.5.5 0 0 0-.424-.276l-3.187-.15a.5.5 0 0 1-.43-.288l-.761-1.638a.5.5 0 0 0-.162-.196l-.906-.652a.5.5 0 0 0-.202-.087l-1.917-.351a.5.5 0 0 0-.268.024l-1.06.403a.5.5 0 0 0-.265.234L7.55 7.52a.5.5 0 0 1-.082.114L5.202 9.985a.5.5 0 0 1-.36.153h-.636a.5.5 0 0 1-.36-.153Z"/></svg>`,
})
export class Tc {
  protected readonly b = inject(GeoIconBase);
}
