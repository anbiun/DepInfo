import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DepInfo';
  items: MenuItem[] | undefined;

    position: string = 'top';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: '../assets/img/data-encryption.png',
                link: '/enc'
            },
            {
                label: 'App Store',
                icon: '../assets/img/data-decryption.png',
                link: '/dec'
            }
            // {
            //     label: 'Photos',
            //     icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            // },
            // {
            //     label: 'Trash',
            //     icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            // },
            // {
            //     label: 'Test',
            //     class: 'pi pi-check'
            // }
        ];
    }
}
