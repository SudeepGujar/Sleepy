import { Injectable } from '@angular/core';

@Injectable()
export class SleepyRoles{

    loadRoles() : string[]{
        let roles = ['Sleepy', 'Sleepy pro', 'who cares?'];
        return roles;
    }
}