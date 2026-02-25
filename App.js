function CheckDiscount ({totalAmount, discountrate}) {   				
	const handleClick = () => {
		totalAmount = totalAmount - (totalAmount * discountrate);
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
	let discountrate = 0;      
	if(totalAmount > 500){
		discountrate = 10;
	}     
	return (
		<div style={styleObj}>
			<div>Original Total: 1000, discount rate: {discountrate}%</div>
			<CheckDiscount totalAmount={totalAmount} discountrate={discountrate}/>
			<div>Final Total: {totalAmount.toFixed(2)}</div>
		</div>
	);
}
