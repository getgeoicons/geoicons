// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ir',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m15.506 19.28-.564-.103a.5.5 0 0 0-.353.067l-1.1.682a.5.5 0 0 1-.492.02l-3.105-1.591a.5.5 0 0 1-.216-.215l-1.253-2.415a.5.5 0 0 0-.51-.265l-1.143.153a.5.5 0 0 1-.454-.18l-.751-.922a.5.5 0 0 1-.11-.368l.113-1.085a.5.5 0 0 0-.146-.408l-1.958-1.93a.5.5 0 0 1-.102-.566l.664-1.432a.5.5 0 0 0-.126-.588L2.708 7.098a.5.5 0 0 1-.141-.204L1.322 3.51a.5.5 0 0 1 .148-.556l.42-.352a.5.5 0 0 1 .753.131l.407.697a.5.5 0 0 0 .398.247l.68.046a.5.5 0 0 0 .403-.162L5.544 2.45a.5.5 0 0 1 .697-.04l.305.264a.5.5 0 0 1 .07.679l-.222.294a.5.5 0 0 0 .054.663l2.416 2.306a.5.5 0 0 0 .257.13l1.312.237a.5.5 0 0 0 .198-.004l1.514-.338a.5.5 0 0 0 .226-.117l1.601-1.447a.5.5 0 0 1 .21-.113l1.715-.444a.5.5 0 0 1 .435.092l2.647 2.092a.5.5 0 0 0 .32.107l.768-.014a.5.5 0 0 1 .507.453l.097 1.029a.5.5 0 0 1-.05.27l-.79 1.58a.5.5 0 0 0-.053.253l.151 2.649a.5.5 0 0 0 .247.402l.744.436a.5.5 0 0 1 .135.747l-.737.908a.5.5 0 0 0 .024.658l2.284 2.426a.5.5 0 0 1 .136.321l.021.51a.5.5 0 0 1-.355.5l-1.004.304a.5.5 0 0 0-.35.401l-.12.767a.5.5 0 0 1-.577.416l-3.857-.656a.5.5 0 0 1-.407-.4l-.205-1.091a.5.5 0 0 0-.402-.4Z"/></svg>`,
})
export class Ir {
  protected readonly b = inject(GeoIconBase);
}
