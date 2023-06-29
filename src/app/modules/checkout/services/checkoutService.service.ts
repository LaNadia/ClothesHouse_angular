import { Injectable } from '@angular/core';
import { orderDataType } from '../types/orderDataType.types';
import { FormGroup } from '@angular/forms';

@Injectable()
export class checkoutService {
    async checkoutPost(orderData: FormGroup<orderDataType> ) {
       return await fetch('https://httpbin.org/post', {
            // ждем fetch
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: orderData as unknown as BodyInit,
        })
            .then((response) => {
                console.log(response.status)
                return response.status;
            })
            .catch((error) => {
                console.log(error);
                return error
            });
    }
}
