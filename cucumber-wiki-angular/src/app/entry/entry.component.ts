import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntriesService, EntryDTO } from '../entries.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private entriesService: EntriesService) { }
  entry: EntryDTO = null;
  entryName: string;

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      if (params['id']) {
        this.entryName = params['id'].toString();
        console.log(this.entryName);
        this.entry = await this.entriesService.getEntry(this.entryName) as EntryDTO;
        console.log(this.entry);
      }
    });
  }


}
