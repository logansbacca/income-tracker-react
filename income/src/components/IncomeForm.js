import React,{useRef} from 'react'

function IncomeForm({income,setIncome}) {

    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const addIncome = (e) => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);
    
        setIncome([...income, {
          "desc": desc.current.value,
          "price": price.current.value,
          "date": newD.getTime()
        }]);
    
        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;

    }

    return (
        <form className="income-form" onSubmit={addIncome}>
            <div className="form-inner">
            <input type="text" ref={desc}  name="desc"  id="desc" 
            placeholder="Income Description"/>
            <input type="number" ref={price} name="price" id="price" placeholder="Price"/>
            <input type="date" ref={date} name="desc" id="date" placeholder="income date"/>
            <input type="submit" value="Add Income" />
            </div>
        </form>
    )
}

export default IncomeForm
