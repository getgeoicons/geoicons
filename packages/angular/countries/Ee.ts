// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.653 16.276.876-2.453a.532.532 0 0 0-.915-.514l-.376.465a.605.605 0 0 1-.713.174l-.186-.082a2.02 2.02 0 0 1-1.103-1.208l-.104-.315a2 2 0 0 1-.089-.39L6.74 9.505a1.98 1.98 0 0 1 .983-1.966l1.603-.918a4 4 0 0 1 1.72-.523l1.596-.112c.225-.016.444-.081.64-.192l.564-.32c.276-.157.61-.174.901-.046l1.547.678q.297.13.62.161l4.014.38a1 1 0 0 0 .78-.274.59.59 0 0 1 .86.038l.085.098c.18.21.197.514.039.741l-1.136 1.629c-.202.29-.541.453-.894.429l-.916-.062a1.12 1.12 0 0 0-1.076.622c-.208.423.203 1.27.203 1.27l.865 1.876 1.561 2.905c.2.36.162.806-.098 1.126l-1.012 1.243a1 1 0 0 1-.806.37l-2.186-.053a1 1 0 0 1-.726-.334l-1.145-1.276a3 3 0 0 0-1.03-.746l-1.399-.618a1.01 1.01 0 0 0-.987.1l-1.544 1.088a.47.47 0 0 1-.713-.542Zm-7.927-1.95-.3 1.03a.79.79 0 0 0 1.494.508l.436-1.11a.8.8 0 0 1 .402-.432l1.56-.74a.8.8 0 0 0 .2-1.31l-.25-.232a1 1 0 0 0-.919-.238l-2.21.544a.8.8 0 0 0-.574 1.013l.157.508a.8.8 0 0 1 .004.459Zm2.456-3.988.325-.179a.8.8 0 0 0 .204-1.24l-.338-.37a.8.8 0 0 0-.933-.182l-.346.164a.8.8 0 0 0-.242 1.268l.359.384a.8.8 0 0 0 .971.155Z"/></svg>`,
})
export class Ee {
  protected readonly b = inject(GeoIconBase);
}
