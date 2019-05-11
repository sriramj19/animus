import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class UtilService {
    constructor(private titleService: Title) {
        this.setIsMobile();
    }

    public isMobile: boolean;

    public setTitle(title: string) {
        this.titleService.setTitle(title);
    }

    public raiseException(message: string, data: any) {
        console.log('!Exception while ' + message);
        console.log('#Detailed Report: ', data);
    }

    public getLargestNumber(arr: number[]) {
        return Math.max.apply(null, arr);
    }

    private setIsMobile() {
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
}