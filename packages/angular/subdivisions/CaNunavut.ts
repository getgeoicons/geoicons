// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-nunavut',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.383 19.848 4.38 18.475a.6.6 0 0 1-.261-.495v-.912a.6.6 0 0 1 .594-.6l1.406-.015a.6.6 0 0 0 .593-.612l-.086-4.38a1 1 0 0 1 .282-.717l.825-.85a.8.8 0 0 0 .225-.523l.046-1.08a.8.8 0 0 1 .766-.765l.542-.023a.8.8 0 0 0 .765-.753l.058-1.004a2 2 0 0 1 .408-1.1l.29-.378a5 5 0 0 1 1.052-1.023l1.998-1.436a3 3 0 0 1 1.644-.563l.841-.03a3 3 0 0 1 .886.101l.44.119a3 3 0 0 1 1.286.72l.19.179a1 1 0 0 1 .05 1.4l-1.417 1.553a5 5 0 0 0-.734 1.047l-1.271 2.422a8 8 0 0 0-.664 1.724l-.274 1.065a3 3 0 0 0 .293 2.222l.409.724a2 2 0 0 0 .658.698l.626.402a2 2 0 0 1 .807 1.028l.22.636a2 2 0 0 0 .701.955l.355.262a1 1 0 0 1 .324 1.2l-.768 1.781a.8.8 0 0 1-1.227.314l-1.172-.916a1 1 0 0 0-.74-.204l-2.947.365a1 1 0 0 0-.703.43l-.745 1.095a.6.6 0 0 1-.496.262h-.85a.6.6 0 0 1-.6-.6v-1.185a.6.6 0 0 0-.487-.59l-1.378-.262a2 2 0 0 1-.757-.315Z"/></svg>`,
})
export class CaNunavut {
  protected readonly b = inject(GeoIconBase);
}
