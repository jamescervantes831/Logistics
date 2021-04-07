import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { SpService } from '../services/sp.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() providerid: number;
  public notes = []
  constructor(private spService: SpService,
    private notesService: NotesService) { }

  ngOnInit(): void {
    let dataRows;
    this.notesService.getNoteByProviderID(this.providerid).subscribe(
      data => {
        console.log('NOTES DATA: ' +JSON.stringify(data['data']['rows']))
        dataRows = data['data']['rows']
      },
      error => console.log(error),
      () => {
        this.notes = dataRows
        console.log("GET COMPLETE HERE ARE YOUR NOTES "+JSON.stringify(this.notes))
      }
    )
    console.log("NOTES AFTER GET REQUEST" +this.notes)
  }

}
