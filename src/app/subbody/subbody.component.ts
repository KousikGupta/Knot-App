import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import faYoutube from '@iconify/icons-fa-brands/youtube';


@Component({
  selector: 'app-subbody',
  templateUrl: './subbody.component.html',
  styleUrls: ['./subbody.component.css']
})



export class SubbodyComponent implements OnInit {
 
  camera = faCamera;
  faChevronRight=faChevronRight;
  faYoutube=faYoutube
 
  format = 'dd MMMM yyyy';

   formattedDate = formatDate(Date(), this.format, 'en-US');


  constructor() { }

  ngOnInit(): void {
    console.log(this.formattedDate)
  }

}
