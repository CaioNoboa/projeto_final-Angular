// Este componente faz a rota
// <router-outlet></router-outlet> faz o roteamento dos componentes internos (filhos)

import { Component } from "@angular/core";

@Component({
    selector: 'conta-app-root',
    template: '<router-outlet></router-outlet>'
})
export class ContaAppComponent {}