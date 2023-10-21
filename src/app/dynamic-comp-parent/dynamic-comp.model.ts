import { Type } from '@angular/core';

export class DynamicCompItem {
    constructor(public component: Type<any>, public data: any) { }
}

export interface DynamicChildComponentBase { 
    data: any;
}