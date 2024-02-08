import React from 'react';

function SubmitButton({ inputs }) {
    const areInputsFilled = inputs.every((input) => input.value);

    return (
        <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!areInputsFilled}>
            Register
        </button>
    );
}

export default SubmitButton;
