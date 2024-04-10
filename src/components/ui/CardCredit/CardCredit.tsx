import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './CardCredit.module.css';
import React, { useState } from 'react';
import { toast } from 'sonner';

export const CardCredit = () => {

    const [cardData, setCardData] = useState({
        number:'',
        name:'',
        expiry:'',
        cvc:'',
        focus:'',
    });

    const {number, name, expiry, cvc} = cardData;


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        let trimmedValue = value;

        switch (name) {
            case 'number':
                trimmedValue = value.slice(0, 16);
                break;
            case 'expiry':
                trimmedValue = value.slice(0, 4);
                break;
            case 'cvc':
                // Suponiendo un máximo de 3 dígitos para CVC
                trimmedValue = value.slice(0, 3);
                break;
            default:
                break;
        }
        
        setCardData({
            ...cardData,
            [name]: trimmedValue,
        });
    };

    // PROPIO DE LA LIBRERIA DE CARD CREDIT 2 (pide enviar al atributo focus)
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const {name} = e.target;
        setCardData({
            ...cardData,
            focus: name,
        })
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validar que los campos no esten vacios
        if([number, name, expiry, cvc].includes('')){
            //mostrar mensaje
            toast.error('All fields are required')
            return;
        }

        //limpiar el estado
        setCardData({
            number:'',
            name:'',
            expiry:'',
            cvc:'',
            focus:'',
        });
    };

  return (
    <>
        <div className={styles.container}>
            <div>
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={cardData.focus as any}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label 
                        htmlFor="number">Card Number</label>
                    <input 
                        type="text" 
                        name="number" 
                        id="number"
                        value={number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>

                {/* Grupo */}
                <div className={styles.formInputGrup}>
                    <div className={styles.formControl}>
                        <label 
                            htmlFor="expiry">Card Expiry</label>
                        <input 
                            type="text" 
                            name="expiry" 
                            id="expiry"
                            value={expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label 
                            htmlFor="cvc">Card CVC</label>
                        <input 
                            type="text" 
                            name="cvc" 
                            id="cvc"
                            value={cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className={styles.buyButton}
                >Buy Now</button>
            </form>
        </div>
    </>
  )
}
