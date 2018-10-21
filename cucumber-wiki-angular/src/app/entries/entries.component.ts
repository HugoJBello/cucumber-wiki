import { Component, OnInit } from '@angular/core';
import { EntriesService, EntryDTO } from '../entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  constructor(private entriesService: EntriesService) { }
  entries: EntryDTO[];
  async ngOnInit() {
    this.entries = await this.entriesService.getEntries(10, 0);
    console.log(this.entries);
  }

}
