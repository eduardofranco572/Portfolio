import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [], 
  templateUrl: './header.component.html'
})

export class Header implements AfterViewInit, OnDestroy {
    activeSection: string = '';
    private observer: IntersectionObserver | undefined;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private cdr: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const options = {
                root: null,
                rootMargin: '-30% 0px -30% 0px', 
                threshold: 0
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeSection = entry.target.id;
                        this.cdr.detectChanges();
                    }
                });
            }, options);

            setTimeout(() => {
                const sections = document.querySelectorAll('section[id]');
                sections.forEach(section => {
                    this.observer?.observe(section);
                });
            }, 100);
        }
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}