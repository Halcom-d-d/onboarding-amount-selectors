function AmountSelector({filters}) {

    return (
        <div>
            From: <input value={filters.amountFrom} className="filter"/>
            To: <input value={filters.amountTo} className="filter"/>
            <button>Submit</button>
        </div>
    );
};

export default AmountSelector;
