import { FormControl } from "@angular/forms";

export interface orderDataType {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    phone: FormControl<string | null>;
    address: FormControl<string | null>;
}