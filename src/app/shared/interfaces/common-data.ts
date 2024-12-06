export interface DropdownOption {
    id: number | string;
    name: string;
}

export interface ActionsButton {
    type: 'button' | 'submit' | 'reset',
    color: 'primary' | 'secondary' | 'danger' | 'success',
    label: string,
    icon?: string,
    callback: (row: any) => void
}