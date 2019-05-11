import { AbstractControl } from '@angular/forms';

export function compairPassword(control: AbstractControl){
    if(control && control.value !== null && control.value !== undefined ){
        const password = control.value;
        const cpassword = control.root.get('password');
        if(cpassword){
            if(cpassword.value !== password || password === '')
            {
                return {
                    isNotMatchError: true
                }
            }
        }
        console.log('cpassword.errors', control.root.get('cpassword'))
    }
    return null;
}