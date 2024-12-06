import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { DropdownOption } from '../../interfaces/http-common-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-downs.component.html',
  styleUrl: './drop-downs.component.css'
})
export class DropDownsComponent {

  @Input() titleDropDown: string = ""
  @Input() optionsDropDown: DropdownOption[] = []

  @Output() onChange = new EventEmitter<({ id: number | string, name: string })>;

  isDropdownOpen = signal<boolean>(false);
  optionsSelected: string = "January"

  toggleDropdown(): void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  selectOption(option: DropdownOption): void {
    this.optionsSelected = option.name;
    // this.titleDropDown = option.name;
    this.onChange.emit({ id: option.id, name: option.name }); // Emitimos el evento al padre para actualizar el valor seleccionado en el componente padre.
    this.isDropdownOpen.set(false); // Cierra el menú al seleccionar una opción
  }

}
