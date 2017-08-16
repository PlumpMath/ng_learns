import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  public names = [
    { name: 'Kamal'},
    { name: 'Mitchel'},
    { name: 'Yoon'},
    { name: 'Johnson'},
    { name: 'Jet Li'}
  ];

  public selectedName = {name : ''};

  onNameClicked(nam) {
    this.selectedName = nam;
  }
  onAddName(nam) {
    this.names.push({name: nam.value});
  }
  onDeleteName() {
    this.names.splice(this.names.indexOf(this.selectedName), 1);
      this.selectedName.name = '';
  }
}
