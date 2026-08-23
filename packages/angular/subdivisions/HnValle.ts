// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-valle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.411 9.33a.6.6 0 0 0-.379-.708l-8.001-2.886a1 1 0 0 1-.658-1.01l.15-2.179a.6.6 0 0 0-.468-.627l-2.38-.529a.6.6 0 0 0-.723.68l.391 2.465a1 1 0 0 1-.024.426l-2.224 7.975a1 1 0 0 0 .654 1.22l1.113.36a1 1 0 0 1 .686 1.065l-.074.647a1 1 0 0 1-.584.8l-1.493.668a1 1 0 0 0-.191 1.712l1.025.77a1 1 0 0 0 1.174.02l1.49-1.042a1 1 0 0 0 .419-.703l.107-.916a1 1 0 0 1 .513-.76l.784-.43a1 1 0 0 1 1.462.689l.256 1.331a1 1 0 0 1-.722 1.155l-.312.084a1.5 1.5 0 0 0-.743.465l-.241.278a1.2 1.2 0 0 0 .603 1.95l.953.25a1 1 0 0 0 1.218-.707l.294-1.083a1 1 0 0 1 .49-.619l3.363-1.815a1 1 0 0 1 .63-.108l2.599.409a1 1 0 0 0 1.03-.502l.355-.642a1 1 0 0 0 .093-.743l-.554-2.079c-.08-.301-.23-.58-.438-.813l-1.808-2.035a1 1 0 0 1-.223-.902z"/></svg>`,
})
export class HnValle {
  protected readonly b = inject(GeoIconBase);
}
