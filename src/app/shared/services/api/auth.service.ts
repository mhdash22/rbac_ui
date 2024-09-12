import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isAuthenticate = false;
    constructor(private apiservice: ApiService, private router: Router, private sharedService: SharedService) {
    }
    login(url: string, email: string, password: string) {
        debugger
        this.apiservice.loginAuthenticate(url, email, password).subscribe(response => {
            if (response.status == true) {
                let menu: any
                //   this.sharedService.setmenu(response.data);
                if (response.data[0].add === true) {
                    console.log('add-value:',response.data.add)
                    debugger
                    menu = {
                        data: [
                            { title: 'Dashboard', id: '/dashboard/base' },
                            { title: 'Admin-Dashboard', id: '/dashboard/admin'}
                        ]
                    }
                } else {
                    menu = {
                        data: [
                            { title: 'Dashboard', id: '/dashboard/base' },
                        ]
                    }
                }
                sessionStorage.setItem("menu", JSON.stringify(menu));
                console.log(response.status)
                this.router.navigate(['/dashboard']);
            }
        });

        this.isAuthenticate = true;
    }

    logout() {
        // Implement your logout logic here.
        this.isAuthenticate = false;
    }

    isAuthenticated(): boolean {
        return this.isAuthenticate;
    }
}
