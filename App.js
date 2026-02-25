function CheckDiscount ({totalAmount, discountrate, discountedTotal}) {   				
	const handleClick = () => {
		discountedTotal = totalAmount - (totalAmount * discountrate);
	};
	return(
		<><button onClick={handleClick}>Calc Final Total</button></>        
	);
}

export default function App() {
 	const styleObj = {
    	textAlign: 'center',      
    	marginTop: '50px'
  	};
	let totalAmount = 1000;
	let discountedTotal = null;
	let discountrate = 0;      
	if(totalAmount > 500){
		discountrate = 10;
	}     
	return (
		<div style={styleObj}>
			<div>Original Total: {totalAmount}, discount rate: {discountrate}%</div>
			<CheckDiscount totalAmount={totalAmount} discountrate={discountrate} discountedTotal={discountedTotal} />
			{discountedTotal && <p>Final Total: {discountedTotal.toFixed(2)}</p>}
		</div>
	);
}

