import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-header',
  template: `
    <header class="sticky-top">
      <nav class="navbar navbar-light bg-white">
        <a class="navbar-brand">ALURAPIC</a>
        <div>
          <i class="fa fa-user-circle"></i> <a>Aqui deve entrar o username</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
