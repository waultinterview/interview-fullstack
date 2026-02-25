function CheckDiscount ({totalAmount, discountrate}) {   				
	const handleClick = () => {
		totalAmount = totalAmount * discountrate;
	};
	return(
		<><button onClick={handleClick}>Calc after Discount (10% discount)</button></>        
	);
}

export default function App() {
	let totalAmount = 1000;
	let discountrate = 1;      
	if(totalAmount > 500){
		discountrate = 0.9;
	}     
	return (
		<div>
			<div>Original Total: 1000</div>
			<CheckDiscount totalAmount={totalAmount} discountrate={discountrate}/>
			<div>Final Total: {totalAmount.toFixed(2)}</div>
		</div>
	);
}

