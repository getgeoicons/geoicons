// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-benelux',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.022 12.367-2.555 1.484a.6.6 0 0 0-.27.702l.19.59a1 1 0 0 0 .338.484l1.755 1.367a1 1 0 0 0 .293.158l1.747.593a1 1 0 0 1 .653.723l.174.757a1 1 0 0 0 .907.774l1.187.08a1 1 0 0 1 .669.322l1.602 1.744a1 1 0 0 0 .608.315l2.185.282a.6.6 0 0 0 .628-.359l.383-.895a.6.6 0 0 0-.134-.667l-.695-.673a1 1 0 0 1-.175-1.21l.352-.623a1 1 0 0 0-.09-1.116l-.94-1.176a1 1 0 0 1-.215-.522l-.087-.843a1 1 0 0 1 .082-.51l.69-1.545a1 1 0 0 0-.061-.932l-.46-.748a.6.6 0 0 1 .356-.895l1.702-.453a1 1 0 0 0 .623-.493l.53-.983a.6.6 0 0 0-.236-.809l-.61-.34a.6.6 0 0 1-.306-.503l-.02-.575a.6.6 0 0 1 .59-.62l.419-.007a.6.6 0 0 0 .566-.433l.404-1.404a1 1 0 0 0-.2-.926l-.757-.888a1 1 0 0 0-.75-.35l-3.797-.041a1 1 0 0 0-.458.105l-1.408.704a1 1 0 0 0-.457.467l-.619 1.31a1 1 0 0 0-.078.244l-.663 3.536a1 1 0 0 1-.185.42l-3.111 4.116a1 1 0 0 1-.296.262Z"/></svg>`,
})
export class Benelux {
  protected readonly b = inject(GeoIconBase);
}
