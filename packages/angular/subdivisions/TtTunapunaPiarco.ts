// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-tunapuna-piarco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M14.656 20.342a1 1 0 0 0 .71-.197l1.413-1.068a1 1 0 0 1 .36-.172l1.295-.324a1 1 0 0 0 .709-.66l.296-.909a1 1 0 0 0-.282-1.053l-1.166-1.05a1 1 0 0 1-.31-.945l.553-2.68a1 1 0 0 0-.965-1.202l-.637-.009a.756.756 0 0 1-.003-1.511l2.49-.046a1 1 0 0 0 .85-.501l.63-1.098a1 1 0 0 1 .716-.49l.975-.15a.6.6 0 0 0 .51-.594l-.003-1.08a1 1 0 0 0-.157-.537l-.772-1.21a.6.6 0 0 0-.625-.266l-5.697 1.152a1 1 0 0 1-.347.01l-6.113-.92a1 1 0 0 0-.965.41L7.33 4.36a1 1 0 0 0-.183.605l.056 2.058A1 1 0 0 1 6.069 8.04l-2.927-.4a1 1 0 0 0-.6.106l-.921.483a.6.6 0 0 0-.303.681l1.008 3.916a2 2 0 0 1 .02.91l-.378 1.794a2 2 0 0 0-.003.81L2.911 21a.6.6 0 0 0 .6.481l2.513-.05a.6.6 0 0 0 .566-.438l.098-.35a.6.6 0 0 1 .88-.358l.947.55a1 1 0 0 0 1.197-.146l.481-.464a1 1 0 0 1 .801-.275z"/></svg>`,
})
export class TtTunapunaPiarco {
  protected readonly b = inject(GeoIconBase);
}
