'use client';

import axios from "axios";
import { useState } from "react";

interface BuyButtonProps {
    priceId: string;
}

export function BuyButton({ priceId }: BuyButtonProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyButton() {
        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout', {
                priceId,
            });

            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl;
        } catch (error) {
            alert('Falha ao redirecionar ao checkout.');
            console.error('Erro ao comprar:', error);
            setIsCreatingCheckoutSession(false);
        }
    }

    return (
        <button
            className='mt-auto bg-green-700 rounded-lg p-5 text-white font-bold text-lg cursor-pointer hover:bg-green-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
            onClick={handleBuyButton}
            disabled={isCreatingCheckoutSession}
        >
            Comprar agora
        </button>
    );
}