// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bl',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.7 14.203-1.945-1.77a1 1 0 0 1-.278-1.05l.168-.513a.963.963 0 0 1 1.782-.119l.191.397a1 1 0 0 0 1.07.553l.702-.12a1 1 0 0 1 1.057.526l1.048 2.026c.308.596 1.11.72 1.591.252a1 1 0 0 1 .95-.25.994.994 0 0 0 1.118-.468l.523-.915a.75.75 0 0 1 1.114-.218l1.15.902a1 1 0 0 0 .66.213l1.282-.055a.75.75 0 0 1 .773.867l-.24 1.5a.75.75 0 0 1-1.005.584l-.176-.066a1 1 0 0 0-.707 0l-.75.283a1 1 0 0 0-.645.875l-.013.23a.695.695 0 0 1-1.061.548l-.086-.053a.82.82 0 0 0-1.103.224.82.82 0 0 1-.847.327l-.45-.1a.82.82 0 0 0-.835.31.822.822 0 0 1-1.289.032l-1.832-2.205a1 1 0 0 1-.197-.893l.08-.306a1 1 0 0 0-.121-.789l-.006-.009a1 1 0 0 0-.75-.461l-.347-.034a1 1 0 0 1-.577-.255ZM1.987 6.145l-.157-.162a.964.964 0 0 1 1.23-1.471l.187.126a.987.987 0 1 1-1.26 1.507ZM12.864 9.41l-.56.45a.797.797 0 1 1-.963-1.27l.583-.418a.778.778 0 0 1 .94 1.238Zm4.41-2.464-1.492.09a.697.697 0 1 0 .102 1.391l1.49-.129a.678.678 0 0 0-.1-1.352Z"/></svg>`,
})
export class Bl {
  protected readonly b = inject(GeoIconBase);
}
