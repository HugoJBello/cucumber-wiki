import { Component, OnInit } from '@angular/core';
import { EntryDTO, EntriesService } from '../entries.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private entriesService: EntriesService) { }
  entry: EntryDTO = null;
  entryName: string;
  hidden: string;

  async ngOnInit() {
    this.initEntry();

    this.route.params.subscribe(async params => {
      if (params['id']) {
        this.entryName = params['id'].toString();
        console.log(this.entryName);
        this.entry = await this.entriesService.getEntry(this.entryName) as EntryDTO;
        console.log(this.entry);
      }
      if (params['hidden']) { this.hidden = params['hidden'].toString(); }
    });
  }
  async submmit() {
    this.updateEntry();
    await this.entriesService.saveEntry(this.entry);
    this.router.navigate(['entries']);

  }

  async delete() {
    this.updateEntry();
    await this.entriesService.deleteEntry(this.entry.name);
    this.router.navigate(['entries']);

  }

  updateEntry() {
    this.entry._id = this.entry.title;
    this.entry.name = this.entry.title;
  }

  initEntry() {
    this.entry = {
      _id: 'enter_title', title: 'enter title', content: 'enter content',
      tags: 'enter tags', hidden: false, created_by: '', edited_by: '', created_at: new Date(), updated_at: new Date()
    };
  }

}
