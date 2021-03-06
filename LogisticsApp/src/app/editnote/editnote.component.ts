import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private notesService: NotesService) { }

  @Input() note: {}
  public localContactVar: {}

  public noteEditForm = this.fb.group({
    providerid: [0],
    noteid:[0],
    title: ['', Validators.required],
    body: ['', Validators.required]
  })
  ngOnInit(): void {
    for(const note in this.note){
      console.log("key-value: "+ note)
      if(this.note[note] && this.noteEditForm.get(note)){
        this.noteEditForm.get(note).setValue(this.note[note])
      }
    }
  }
  onSubmit(editContactForm: any){
    const noteid = editContactForm.getRawValue().noteid
    const providerid = editContactForm.getRawValue().providerid
    this.notesService.updateNote(noteid, providerid,editContactForm.getRawValue()).subscribe(
      data => console.log(data['data']['rows']),
      error => console.log(error.mesage),
      () => console.log("ALLL DONE")
    )
  }

}
