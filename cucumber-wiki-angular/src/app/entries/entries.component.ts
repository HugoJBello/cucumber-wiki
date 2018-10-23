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
  orderingOptions = ['created_at', 'edited_at', 'name'];
  sort: string;
  order = 'desc';

  async ngOnInit() {
    this.entries = await this.entriesService.getEntries(10, 0);
    console.log(this.entries);
  }

  async refresh() {
    this.entries = await this.entriesService.getEntriesSort(10, 0, this.sort, this.order);
  }

}
