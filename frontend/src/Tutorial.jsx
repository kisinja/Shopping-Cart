import { useState, useEffect } from 'react';
import Joyride from 'react-joyride';

const Tutorial = () => {
    const [run, setRun] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            setRun(true);
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);

    const steps = [
        {
            target: 'Step-1', // Replace with the class or id of your elements
            content: "By Default, we have only one product. Click add to cart to increase it's quantity in the cart.",
        },
        {
            target: 'Step-2',
            content: 'This is the remove from cart button',
        },
        {
            target: 'Step-3',
            content: 'This is the total price of the products',
        },
        {
            target: 'Step-4',
            content: 'This is the dummy payment form.Fill in your details and click on the pay now button to proceed to payment.',
        },
    ];

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
            styles={{
                options: {
                    zIndex: 10000,
                },
                width: 300,
                position: 'absolute'
            }}
        />
    );
};

export default Tutorial;
