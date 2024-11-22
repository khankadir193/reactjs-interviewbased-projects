import React from 'react';
import DailogBox from './DailogBox';

const ModalComp = () => {
    const [isDailogOpen, setIsDailogOpen] = React.useState(false);

    const openDailog = () => setIsDailogOpen(true);
    const closeDailog = () => setIsDailogOpen(false);

    return (
        <div>
            <button onClick={openDailog}>open modal</button>
            <DailogBox
                open={isDailogOpen}
                close={closeDailog}
                header="Modal Title"
                body="This is the modal body"
                footer="This is the modal footer"
            />
        </div>
    );
};

export default ModalComp;