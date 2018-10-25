import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private entriesService: EntriesService) { }
  text = 'text';
  limit = 10;
  ngOnInit() {
  }

  find() {
    this.entriesService.findEntries(this.text, this.limit, 0);
  }

}
